//**************************************************************************
;(function($, undefined) {

	////////////////////////////////////////////////////////////////////////
	function diamond( cx, h, v, color ) {

		cx.strokeStyle = color.toColor();
		cx.fillStyle = color.toColor();

		cx.beginPath();
		cx.moveTo(0, v.y);
		cx.lineTo(h.x, 0);
		cx.lineTo(0, -v.y);
		cx.lineTo(-h.x, 0);
		cx.lineTo(0, v.y);
		cx.fill();
	};

	////////////////////////////////////////////////////////////////////////
	function iterate( ctx, arcs, h, v, color ) {

		for (var i = 0; i < arcs.length; i++) {

			ctx.save();

			ctx.rotate( arcs[i].arc );
			ctx.translate( 90, 0 );

			color.alpha( arcs[i].opacity );
			color.green( 140 + i );

			diamond( ctx,
				h.scale( arcs[i].scale, arcs[i].scale ),
				v.scale( arcs[i].scale, arcs[i].scale ),
				color );

			ctx.restore();
		}
	};

	////////////////////////////////////////////////////////////////////////
	function draw() {

		var dwg = $("#canvas").dwg();

		dwg.context.save();
		dwg.context.translate( dwg.center.x, dwg.center.y );

		var arcs = []
			.toSteps(
				0, Math.PI * 2, (Math.PI * 2) / 34,
				function( i, e, v ) { return { arc:e }; })
			.toSteps(
				.25, 1, .75 / 34,
				function( i, e, v ) {
					return { opacity:e, scale:e, arc:v.arc };
				});

		var h = $.vec( 50, 0 );
		var v = $.vec( 0, 15 );

		iterate( dwg.context, arcs, h, v, [150, 0, 0, 1] );

		dwg.context.restore();

	};

	draw();

})(jQuery);

