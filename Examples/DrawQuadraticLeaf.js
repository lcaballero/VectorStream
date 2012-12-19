//**************************************************************************
;(function($, undefined) {

	////////////////////////////////////////////////////////////////////////
	function draw( dwg ) {

		var r1 = 40;

		var a = $.vec(0, 0);
		var cp1 = $.vec(r1, 10);
		var cp2 = $.vec(r1, 50);

		var cp3 = $.vec(   r1, 80);
		var cp4 = $.vec(r1-15, 110);

		dwg.beginPath("Leaf")
			.moveTo( a )
			.quadraticCurveTo( cp1, cp2 )
			.quadraticCurveTo( cp3, cp4 )
			.stroke(
				function() {

					var cps = this.controlPoints()

					for (var i = 0; i < cps.length; i++) {
						this.drawControlPoint( cps[i] );
					}
				});

		dwg.beginPath()
			.strokeStyle( dwg.styles.controlPointsStroke )
			.moveTo( a )
			.lineTo( cp1 )
			.lineTo( cp2 )
			.lineTo( cp3 )
			.lineTo( cp4 )
			.stroke();
	};

	////////////////////////////////////////////////////////////////////////
	var dwg = $("#canvas").dwg();

	dwg.toCartesian()
		.translate( $.vec( dwg.center.x, dwg.center.y ) )
		.strokeStyle( "#000000" );

	////////////////////////////////////////////////////////////////////////
	draw( dwg );

	console.info( dwg );

})(jQuery);

