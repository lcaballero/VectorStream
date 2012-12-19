//**************************************************************************
;(function($, undefined) {

	var canvas = $("#canvas");
	var ctx = canvas[0].getContext('2d');

	function drawPass( ctx, ar, x, size ) {

		for (var i = 0; i < ar.length; i++) {
			var a = ar[i];
			ctx.fillStyle = a.color;
			ctx.fillRect( x, i*size, size, size );
		}
	}

	function bubbleSort( ar, sortPassFn ) {

		for (var i = 0; i < ar.length; i++) {
			for (var j = i; j < ar.length - 1; j++) {
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

	function swap( ar, i, j ) {
		var a = ar[i];
		var b = ar[j];
		ar[i] = b;
		ar[j] = a;
	}

	function doublePassSort( ar, sortPassFn ) {

		var right = 0, left = 0, j = 0, k = 0;

		while (true) {

			for (j = left; j < ar.length - right - 1; j++) {
				var a = ar[j];
				var b = ar[j+1];

				if (a.index < b.index) {
					swap( ar, j, j+1 );
				}
			}
			right++;

			sortPassFn(ar);

			for (k = ar.length - right - 1; k >= left; k--) {
				var a = ar[k+1];
				var b = ar[k];

				if (a.index > b.index) {
					swap( ar, k+1, k );
				}
			}
			left++;

			sortPassFn(ar);

			console.log( right, left, j, k, ar.length );

			if (left + right >= ar.length) {
				break;
			}
		}
	};

	function run() {

		var canvas = $("#canvas");
		var ctx = canvas[0].getContext('2d');

		var x = 0;
		var w = 600;
		var size = 6;

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

		drawPass( ctx, points, x*size, size );

		doublePassSort(
			points,
			function( ar ) {
				x++;
				drawPass( ctx, points, x*size, size );
			});
	}

	run();
o

})(jQuery);



