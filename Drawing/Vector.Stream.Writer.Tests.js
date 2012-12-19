;(function ($) {

	$.fn.testStream = function() {
		var c = $("#canvas");
		if (c.length == 0) {
			$("body:first").append(
				$('<canvas id="canvas" class="none">')
					.attr("height",400)
					.attr("width",600));
		}
		return $("#canvas").stream();
	}

	////////////////////////////////////////////////////////////////////////
	$.test.fixtures["Vector.Stream.Writer.Tests"] = {

		description: "Vector.Stream.Writer.Tests",
		stream_has_context: function (expect, is) {

			var buff = $("#canvas").testStream();

			expect(
				!!buff.context,
				is.eq( true ),
				"Expect stream buffer to have a context");
		},
		buffer_with_ops_writes: function (expect, is) {

			var buff = $("#canvas").testStream();
				buff.write({ method: "beginPath", args: [] })
					.write({ method: "translate", args: [300, 200] });

			expect( buff.buffer.length, is.eq( 2 ) );
			buff.flush();
			expect( buff.buffer.length, is.eq( 0 ) );
		},
		buffer_with_ops_write_array: function (expect, is) {

			var buff = $("#canvas").testStream();
				buff.write([
					{ method: "beginPath", args: [] },
					{ method: "translate", args: [300, 200] }]);

			expect( buff.buffer.length, is.eq( 2 ) );
			buff.flush();
			expect( buff.buffer.length, is.eq( 0 ) );
		},
		buffer_with_ops_write_array_and_ops: function (expect, is) {

			var buff = $("#canvas").testStream();
				buff.write([
					{ method: "beginPath", args: [] },
					{ method: "translate", args: [300, 200] }],
					{ method: "moveTo", args: [0, 0] });

			expect( buff.buffer.length, is.eq( 3 ) );
			buff.flush();
			expect( buff.buffer.length, is.eq( 0 ) );
		}

	}

})(jQuery);