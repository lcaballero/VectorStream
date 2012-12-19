/**************************************************************************/
;(function($) {

	////////////////////////////////////////////////////////////////////////
	function contextSets( ctx, types ) {

		var sets = {
			fns:{}, nums:{}, strs:{}, props:{}, others:{}
		};

		var a = types || $.types( ctx );

		for (var i = 0; i < a.length; i++) {
			var items = a[i];
			sets.fns[ items.name ] = items.isFunction;
			sets.nums[ items.name ] = items.isNumber;
			sets.strs[ items.name ] = items.isString;
			sets.props[ items.name ] = items.isNumber || items.isString;
			sets.others[ items.name ] =
				!items.isFunction && !items.isNumber && !items.isString;
		}

		return sets;
	};

	////////////////////////////////////////////////////////////////////////
	$.fn.dwg.fn.api = function( c ) {

		c = c || this.context;

		var a = $.types( c );

		for (var i = 0; i < a.length; i++) {
			console.info( a[i] );
		}
	};

	////////////////////////////////////////////////////////////////////////
	$.apiTable = function( c ) {

		var m = 35, n = 8;

		var headers = [
			"name".padRight(m, " "), "fn".padRight(n, " "),
			"num".padRight(n, " "), "str".padRight(n, " "),
			"other".padRight(n, " ")
		].join("");

		var rows = [
			headers.wrap("div", true)
		];

		var a = $.types( c );

		for (var i = 0; i < a.length; i++) {

			var item = a[i];
			var name = item.name;
			var fn = item.isFunction;
			var num = item.isNumber;
			var str = item.isString;
			var other = !fn && !num && !str;

			rows.push([
				name.padRight(m, " "),
				fn.toString().padRight(n, " ").wrap( "span", fn ),
				num.toString().padRight(n, " ").wrap( "span", num ),
				str.toString().padRight(n, " ").wrap( "span", str ),
				other.toString().padRight(n, " ").wrap( "span", other )
			].join(""));
		}

		$.appendPre(
			rows.join("\n") );

		return this;
	};

	////////////////////////////////////////////////////////////////////////
	function makeVar( name, val ) {
		return [ "var ", name, " = ", val ].join("");
	};

	////////////////////////////////////////////////////////////////////////
	function contextFn( indent, method ) {

		var call = [
			"function() {",
			makeVar( "a", "Array.prototype.slice.call( arguments );" ),
			'context.' + method + '.apply( this.context, a );',
			'return this;'
		];

		return call.join("\n"+indent+indent) + "\n" + indent + "}";
	};

	////////////////////////////////////////////////////////////////////////
	function contextProp( indent, method ) {

		var call = [
			"function( v ) {",
			'context.' + method + ' = v;',
			'return context;'
		];

		return call.join("\n"+indent+indent) + "\n" + indent + "}";
	};

	////////////////////////////////////////////////////////////////////////
	function algorithm() {

		var args = Array.prototype.slice.call( arguments );
		var indent = args.shift();

		args.unshift("");
		var fn = args.join( "\n"+indent+indent );

		return "function() {" + fn + "\n"+indent+"}";
	};

	////////////////////////////////////////////////////////////////////////
	$.fn.calls = function() {

		console.info( "$.fn.calls", this );

		$.appendPre( $.calls( this.toContext() ) );

		return this;
	};

	////////////////////////////////////////////////////////////////////////
	$.calls = function ( ctx ) {

		console.info( "$.calls", ctx );

		var types = $.types( ctx );
		var sets = contextSets( ctx, types );

		var buf = [];

		for (var i = 0; i < types.length; i++) {

			var item = types[i];
			var indent = "   ";
			var call =
				sets.fns[item.name] ? contextFn( indent, item.name ) :
				sets.props[item.name] ? contextProp( indent, item.name ) :
				item.name == "canvas" ?
					algorithm(
						indent,
						"return context.canvas;") :
				item.name == "mozImageSmoothingEnabled" ?
					algorithm(
						indent,
						"return context.mozImageSmoothingEnabled;") :
				"function(){}";

			buf.push( indent + item.name + ":" + call );
		}

		return "function( context ) {\n"
			+ "return {\n"
				+ buf.join(",\n")
			+ "\n};\n"
			+ "};";
	};

})(jQuery);
