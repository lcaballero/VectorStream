//**************************************************************************
;(function($, _, undefined) {

	var steps = 34;
	var base_color = [150,0,0,1];
	var base_green_component = 140;
	var horizontal_size = $.vec(50,0);
	var vertical_size = $.vec(0,15);
	var _2PI = Math.PI * 2;

	/**
	 *
	 */
	function fn( e, i, color, h, v ) {
		return [
			"save",
				{ method:"rotate", args:[e.arc] },
				{ method:"translate", args:[90,0] },
				{ method:"strokeStyle", value:color },
				{ method:"fillStyle", value:color },
				"beginPath",
					{ method:"moveTo", args:[0, v.y] },
					{ method:"lineTo", args:[h.x, 0] },
					{ method:"lineTo", args:[0, -v.y] },
					{ method:"lineTo", args:[-h.x, 0] },
					{ method:"lineTo", args:[0, v.y] },
				"fill",
			"restore"
		];
	};

	$("#canvas")
		.stream()
		.write("save")
		.toCanvasCenter()
		.write(
			_(0).to( _2PI, _2PI / steps ) // 0 to 2*pi in 34 steps
				.zip(
					_(.25).to( 1, .75 / steps ), // .25 to 1 in 34 steps
					function(a,b) {
						return { arc:a, opacity:b, scale:b };
					})
				.selectMany(
					function(e,i) {
						return fn(
							e, i,
							base_color
								.alpha( e.opacity )
								.green( base_green_component + (i*2) )
								.toColor(),
							horizontal_size.scale( e.scale, e.scale ),
							vertical_size.scale( e.scale, e.scale )
						);
					}))
		.write("restore")
		.flush();


})(jQuery,  jynx);
