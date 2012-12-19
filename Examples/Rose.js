//**************************************************************************
;(function($, undefined) {

	var sin = Math.sin;
	var cos = Math.cos;

	////////////////////////////////////////////////////////////////////////
	function toCartesian( rFn, theta ) {
		var r = rFn( theta );
		var y = r * sin( theta );
		var x = r * cos( theta );

		return $.vec( x, y );
	};

	////////////////////////////////////////////////////////////////////////
	function polar( dwg, sc, fn ) {

		var inc = Math.PI / sc;
		var min = -Math.PI;
		var max = Math.PI;

		dwg.beginPath().moveTo( toCartesian( fn, min ) );

		for (var d = min + inc; d < max + inc; d += inc) {
			dwg.lineTo( toCartesian( fn, d ) );
		}
	};

	////////////////////////////////////////////////////////////////////////
	function rose() {

		////////////////////////////////////////////////////////////////////
		var sc = 150;

		var dwg = this
			.toCartesian()
			.toCanvasCenter()
			.scale( sc, sc )
			.lineWidth( 1 / sc )
			.strokeStyle( [256, 0, 0, .6].toColor() )
			.fillStyle( [256, 0, 0, .25].toColor() );

		////////////////////////////////////////////////////////////////////
		polar( dwg, sc, function(t) { return - sin( 5 * t ); } );
		dwg.fill();

		polar( dwg, 20, function(t) { return - sin( 5 * t ); } );
		dwg.fillStyle( [256, 0, 0, .40].toColor() );
		dwg.fill();

		polar( dwg, sc, function(t) { return - sin( 5 * t ); } );
		dwg.stroke();
	};

	////////////////////////////////////////////////////////////////////////
	$("#canvas").dwg()
		.save()
		.console("after save")
		.render(function() {
			this//.draw( rose )
				.draw( vlade );
		})
		.console("after render")
		.fullReset()
		.console("after full reset");

})(jQuery);

