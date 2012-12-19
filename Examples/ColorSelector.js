//**************************************************************************
;(function($, undefined) {

	function color( ctx, colorFn ) {

		for (var i = 0; i < 256; i++) {
			var c = colorFn( i );
			ctx.fillStyle = c;
			ctx.fillRect(i*2, 0, 2, 25);
		}
	};

	function cvs( id ) {
		var canvas = $(id);
		var ctx = canvas[0].getContext('2d');
		return ctx;
	}

	color( cvs("#r-colors"), function(i) { return "rgb("+i+",0,0)"; } );
	color( cvs("#g-colors"), function(i) { return "rgb(0,"+i+",0)"; } );
	color( cvs("#b-colors"), function(i) { return "rgb(0,0,"+i+")"; } );
	color( cvs("#rgb-colors"), function(i) { return "rgb("+i+","+i+","+i+")"; } );


	function row( ctx, ar, x, size ) {

		for (var i = 0; i < ar.length; i++) {
			var a = ar[i];
			ctx.fillStyle = a.color;
			ctx.fillRect( x, i*size, size, size );
		}
	}

	function doubleSort( ar, sortPassFn ) {

		for (var i = 0; i < ar.length; i++) {
			for (var j = i; j < ar.length; j++) {
				var a = ar[j];
				var b = ar[j+1];

				if (a.index < b.index) {
					ar[j] = b;
					ar[j+1] = a;
				}
			}
			sortPassFn(ar);
		}
	};


	function run() {

		var ctx = cvs("#canvas");
		var x = 0;
		var w = 400;
		var size = 5;

		var points = [];

		for (var i = 0; i < (w/size); i++) {
			points.push({ index:i, color:"rgb("+(i+110)+",0,0)" });
		}

		for (var i = 0; i < (w/size); i++) {
			var t1 = Math.floor(Math.random() * 1000) % points.length;
			var t2 = Math.floor(Math.random() * 1000) % points.length;

			var temp = points[t1];
			points[t1] = points[t2];
			points[t2] = temp;
		}

		row( ctx, points, x*size, size );
/*
		doubleSort(
			points,
			function( ar ) {
				x++; row( ctx, points, x*size, size );
			});

	}

	run();


})(jQuery);



