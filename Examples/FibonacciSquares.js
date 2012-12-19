//**************************************************************************
;(function($, undefined) {

	var dwg = $("#canvas").dwg();
	var c = dwg.context;
		c.translate(dwg.center.x, dwg.center.y);
		c.strokeStyle = "#000000";

	////////////////////////////////////////////////////////////////////////
	function fib( n, ar ) {

		if ( n > ar.length - 1 ) {
			for (var i = ar.length; i < n; i++) {
				ar[ i ] = ar[ i - 1 ] + ar[ i - 2 ];
			}
		}

		return ar;
	};

	////////////////////////////////////////////////////////////////////////
	function draw( ctx, n, w, fibs ) {

		var pos = $.vec(0, 0);
		var direction = [
			$.vec( 1, -1),
			$.vec(-1, -1),
			$.vec(-1,  1),
			$.vec( 1,  1)
		];

		ctx.strokeRect(-1*w, -2*w, fibs[1]*w, fibs[1]*w);
		ctx.strokeRect(-1*w, -1*w, fibs[2]*w, fibs[2]*w);

		for (var i = 3, k = 0; i < fibs.length; i++, k++) {

			var d = w*fibs[i];
			var dir = direction[ k % direction.length ];
			var dim = $.vec(d, d).scale( dir.x, dir.y );
			var next = pos.add( dim );

			if (dim.isDownward() && dim.isRightward()) {

				ctx.strokeRect( pos.x, next.y, dim.x, -dim.y );

			} else if (dim.isDownward() &&  dim.isLeftward() ) {

				ctx.strokeRect( next.x, next.y, -dim.x, -dim.y );

			} else if (dim.isUpward() &&  dim.isLeftward() ) {

				ctx.strokeRect( next.x, pos.y, -dim.x, dim.y );

			} else if (dim.isUpward() &&  dim.isRightward() ) {

				ctx.strokeRect( pos.x, pos.y, dim.x, dim.y );

			}

			pos = next;

		}
	};

	draw( c, 10, 5, fib( 10, [0, 1, 1] ) );


})(jQuery);

