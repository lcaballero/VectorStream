;(function($, undefined) {

	////////////////////////////////////////////////////////////////////////
	function vectorParams( params ) {

		params = [].concat( params || [] );

		var a = params[0];
		var b = params[1];
		var c = params[2];
		var d = params[3];

		if ( !!a && a.isVec ) {
			params[0] = a.x;
			params[1] = a.y;
		}

		if ( !!b && b.isVec ) {
			params[2] = b.x;
			params[3] = b.y;
		}

		return params;
	};

	////////////////////////////////////////////////////////////////////////
	function collectControlPoints( method, params ) {

		if (!this.lastPath) { return; }

		params = params || [];

		switch (method) {
			case "arc":
			case "bezierCurveTo":
			case "clearRect":
			case "createLinearGradient":
			case "createRadialGradient":
			//case "fillRect":
			case "lineTo":
			case "moveTo":
			case "quadraticCurveTo":
				this.controlPoints(
					this.lastPath,
					$.vec( params[0], params[1] ) );
				break;
		}

		switch (method) {
			case "bezierCurveTo":
			case "createLinearGradient":
			case "quadraticCurveTo":
				this.controlPoints(
					this.lastPath,
					$.vec( params[2], params[3] ) );
				break;
		}

		switch (method) {
			case "bezierCurveTo":
				this.controlPoints(
					this.lastPath,
					$.vec( params[4], params[5] ) );
				break;
		}
	};

	////////////////////////////////////////////////////////////////////////
	function controlPoints( name ) {

		this._cps = this._cps || {};

		if ( !name && !!this.lastPath && !!this._cps[ this.lastPath ] ) {
			return this._cps[ this.lastPath ];
		}

		if ( arguments.length == 1 ) {

			return this._cps[ name ];

		} else if ( arguments.length > 1 ) {

			var cps = this._cps[name] = this._cps[name] || [];

			for (var i = 1; i < arguments.length; i++) {
				cps.push( arguments[i] );
			}

			return cps;
		}
	};


	////////////////////////////////////////////////////////////////////////
	function draw( fn ) {
		fn.apply( this, [] );
		return this;
	};

	////////////////////////////////////////////////////////////////////////
	function out( fn, args ) {
		for (var i = 0; i < args.length; i++) {
			fn( args[i] );
		}
		return this;
	};

	////////////////////////////////////////////////////////////////////////
	function info() {
		return out.apply( this,
			[ console.info, Array.prototype.slice.call( arguments ) ] );
	};
	function log() {
		return out.apply( this,
			[ console.log, Array.prototype.slice.call( arguments ) ] );
	};
	function dir() {
		return out.apply( this,
			[ console.dir, Array.prototype.slice.call( arguments ) ] );
	};

	////////////////////////////////////////////////////////////////////////
	function incrementId() {
		this.inc_id++;
	};

	////////////////////////////////////////////////////////////////////////
	function lastPath( dwg, method ) {

		dwg.lastPath =
			method == "stroke" ? false :
			method == "fill" ? false :
			method == "clearRect" ? false :
			method == "clip" ? false :
			method == "closePath" ? false :
			dwg.lastPath;
	};

	////////////////////////////////////////////////////////////////////////
	function stateStack( dwg, method ) {

		dwg.stateStack =
			method == "save" ? (++dwg.stateStack) :
			method == "restore" ? (--dwg.stateStack) :
			dwg.stateStack;
	};

	////////////////////////////////////////////////////////////////////////
	function logXfmrs( dwg, method ) {
		switch (method) {
			case "rotate":
			case "translate":
			case "scale":
			case "scaleX":
			case "scaleY":
			case "setTransform":
			case "transform":
				dwg.info( args );
				break;
		}
	};

	////////////////////////////////////////////////////////////////////////
	function toCall( dwg, method ) {

		var prop = dwg[ method ];

		this[ method ] = function() {

			var args = Array.prototype.slice.call( arguments );
			var params = vectorParams( args );

			if ( method == "beginPath" && !!params[0] ) {
				this.lastPath = params[0] || ("Path-" + (this.path++));
			}

			collectControlPoints.apply( this, [ method, params ] );

			lastPath( dwg, method );
			stateStack( dwg, method );
			logXfmrs( dwg, method );

			prop.apply( dwg.stream, params );

			return this;
		};

	};

	////////////////////////////////////////////////////////////////////////
	var Drawing = function( canvas ) {

		var target = {

			stream:canvas.stream(),

			geom:{
				position: $.vec(0,0),
				dim: canvas.toDim(),
				center: canvas.toCenter(),

				// These hold the transformations
				transformations:[],
				inverses:[],
				controlPoints:controlPoints
			},

			draw:draw,

			info:info,
			log:log,
			dir:dir,

			stateStack:0,
			path:0,
			lastPath:"",

			styles:{
				controlPoints:{
					stroke:"#FF0000",
					fill:"#FF0000",
					dim:$.vec( 5, 5 ).scale( -.5, -.5 )
				}
			}
		};

		var props = $.types( target.stream.context );
		var calls = $.calls( target.stream.context );

		$("div textarea").text( calls );

		//eval( "window.____w = " + calls );
		var functions = window.____w( target.stream.context );

		for (var i = 0; i < props.length; i++) {
			var prop = props[i];
			toCall.apply( target, [ functions, prop.name ] );
		}

		$.extend(this, target);

	};

	////////////////////////////////////////////////////////////////////////
	$.fn.dwg = function() {
		var d = new Drawing( this );
			$.data( this[0], "Drawing", d );
			d.save();
		return d;
	};

	$.fn.dwg.fn = Drawing.prototype;

})(jQuery);
