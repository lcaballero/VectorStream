;(function($) {

	////////////////////////////////////////////////////////////////////////
	$.fn.dwg.fn.cartesianGraph = function( opts ) {

		var fill = this.styles["paper"] =
			this.styles["paper"] ||
			"#88a0c4".toColorArray().alpha(.25).toColor();

		return this.fillStyle( fill )
			.fillRect( 0, 0, this.dim.x, this.dim.y )
			.draw( polar );
	};

	////////////////////////////////////////////////////////////////////////
	$.fn.cartesianGraph = function( opts ) {

		var dwg = $.data( this[0], "Drawing" );

		if (!dwg) { return; }

		dwg.fullReset()
			.clearRect( 0, 0, dwg.dim.x, dwg.dim.y )
			.cartesianGraph( opts )
			.render();
	};

	////////////////////////////////////////////////////////////////////////
	function polar() {

		var r = 10;

		var c = Math.sqrt(
			this.dim.x * this.dim.x,
			this.dim.y * this.dim.y);

		var rd = c / r;

		var color = [256, 256, 256].toColor();

		console.info( c, r, color );

		this.strokeStyle( color );

		for (var i = 1; i < rd; i++) {
			this.beginPath()
				.arc( 0, 0, i*rd, 0, Math.PI * 2, false )
				.stroke();
		}
	};

	////////////////////////////////////////////////////////////////////////
	function grid() {

		var xw = 10, yw = 10;
		var w = this.dim.x, h = this.dim.y;
		var sx = w / xw, sy = h / yw;

		this.strokeStyle( [256, 256, 256].toColor() );

		for (var i = 1; i < w; i++) {
			this.beginPath()
				.moveTo( 0, i*sy )
				.lineTo( w, i*sy )
				.stroke();
		}

		for (var i = 1; i < h; i++) {
			this.beginPath()
				.moveTo( i*sy, 0 )
				.lineTo( i*sy, h )
				.stroke();
		}
	};

})(jQuery);

