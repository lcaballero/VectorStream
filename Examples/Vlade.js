;(function($) {

	////////////////////////////////////////////////////////////////////////
	function vlade() {

		var inc = 4;
		var y = inc * 200;

		for (var i = 0; i < 200*inc; i++) {
			this.beginPath()
				.moveTo( 0, y-(i*inc) )
				.lineTo( (i*inc), 0 )
				.stroke();
		}
	};

})(jQuery);