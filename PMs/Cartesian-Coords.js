//**************************************************************************
;(function($, _, undefined) {

	var cv = $("#canvas");
	var dim = cv.toCenter();

	console.log( dim );

	$("#canvas")
		.stream()
		.write([
			"beginPath",
				{ method:"moveTo", args:[0, 0] },
				{ method:"lineTo", args:[dim.x, dim.y] },
			"stroke"
		])
		.flush();

})(jQuery,  jynx);
