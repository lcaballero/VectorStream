;(function($, undefined) {

	/**
	 * This predicate function determines if the parameter is an
	 * instance of a Function.
	 */
	$.isFunction = function( a ) {
		return a.constructor == Function.constructor;
	};

	/**
	 * This predicate function determines if the parameter is an
	 * instance of a String.
	 */
	$.isString = function( a ) { return a.constructor == String; };

	/**
	 * This predicate function determines if the parameter is an
	 * instance of a Number.
	 */
	$.isNumber = function( a ) { return a.constructor == Number; };

	/**
	 * Prepends the given text to the body wrapped in a pre text.
	 */
	$.appendPre = function( text ) {
		$("body:first").append(
			$('<div class="pre-dump"/>').append(
				$("<pre/>").append( text )));
	};

	/**
	 * This function produces an array of objects in the following
	 * format: { name, isString, isNumber, isFunction }.
	 */
	$.types = function( c ) {

		var a = [];

		for (var p in c) {
			var item = c[p];
			if (!item) { continue; }
			a.push({
				name:p,
				isFunction:$.isFunction( item ),
				isString:$.isString( item ),
				isNumber:$.isNumber( item )
			});
		};

		a.sort(function(a,b) { return b.name < a.name; });

		return a;
	};

	/**
	 * Convenience function that turns the value of the given attribute into
	 * an integer with the often misunderstood radix parameter set to 10.
	 */
	$.fn.asInt = function( at ) {
		return parseInt( this.attr( at ), 10 );
	};

	/**
	 * Returns a vector that corresponds the width and height of the
	 * given element.
	 */
	$.fn.toDim = function() {
		return $.vec( this.asInt("width"), this.asInt("height") );
	};

	/**
	 * Returns a vector to the center of the element by simply scaling the
	 * result of toDim() by .5.
	 */
	$.fn.toCenter = function() {
		return this.toDim().scale( .5, .5 );
	};

	/**
	 * Convenience method for aquiring the canvas context often needed
	 * for making canvas drawings and this provides the convenience method.
	 */
	$.fn.toContext = function( version ) {

		if ( this.length > 0 && this.is("canvas") ) {
			return this[0].getContext( version || '2d' );
		} else {
			throw "toContext: No selection or not a canvas element.";
		}
	};

})(jQuery);
