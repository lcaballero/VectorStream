//**************************************************************************
; (function ($, undefined) {

	$.art = $.art || {};

	////////////////////////////////////////////////////////////////////////
	$.art.single_line = function () {
		$("#canvas")
			.stream()
			.write({ method: "beginPath", args: [] })
			.write({ method: "moveTo", args: [100, 100] })
			.write({ method: "lineTo", args: [120, 150] })
			.write({ method: "stroke", args: [] })
			.flush();
	};

})(jQuery);

