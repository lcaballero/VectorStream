;(function($, undefined) {

	////////////////////////////////////////////////////////////////////////
	$.fn.dwg.fn.drawControlPoint = function( v, d ) {

		d = d || this.controlPointDim;

		var stroke = this.context.strokeStyle;
		var fill = this.context.fillStyle;

		this.save();

		var b = v.add( d );
		var dm = Math.abs( d.x + d.x );

		if ( !!this.styles.controlPointsFill ) {
			this.fillStyle( this.styles.controlPointsFill );
			this.fillRect( b.x, b.y, dm, dm );
		}

		if ( !!this.styles.controlPointsStroke ) {
			this.strokeStyle( this.styles.controlPointsStroke );
			this.strokeRect( b.x, b.y, dm, dm );
		}

		this.restore();

		return this;
	};

	////////////////////////////////////////////////////////////////////////
	$.fn.dwg.fn.toCartesian = function() {
		return this
			.scale( 1, -1 )
			.translate( 0, -this.dim.y )
	};

	////////////////////////////////////////////////////////////////////////
	$.fn.dwg.fn.toCanvasCenter = function() {
		return this.translate( this.center.x, this.center.y );
	};

})(jQuery);
