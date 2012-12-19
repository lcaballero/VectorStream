/******************************************************************************
* TODO:
* # Need to figure out a way to expose these as a "mixin" insead of
*		automatically grafting them onto the rest of the mixins.
* # If we are going with mixins, which have similar issues as Extensions
*		methods, namely that granular control of adding them is missing,
*		also, if granular control were possible then they would have
*		dependency resolution requirements.
*****************************************************************************/
; (function ($, _, undefined) {

	/******************************************************************/
	function union(a, b) {
		var union = {};

		$.each(a, function (k, v) {
			union[k] = union[k] || v;
		});
		$.each(b, function (k, v) {
			union[k] = union[k] || v;
		});

		return union;
	};

	var mixins = {
		/***************************************************************************
		*	Takes an object and returns an array of keys (property names) found
		*	on the object.  It takes a second boolean parameter that controls if
		*	it should instead produce an array of pairs, ie. objects of the form:
		*
		*		{key:[key], value:[value]}
		*
		*	where [key] and [value] are those that would be found on the object.
		*
		*	Finally as a last parameter it takes a comparator, and if present the
		*	resulting array.sort function will be called with this comparator;
		*	keeping in mind that it can produce 2 variations of arrays.
		**************************************************************************/
		keys: function (obj, pairs, compare) {
			var keys = [];
			$.each(obj, function (k, v) {
				keys.push(!!pairs ? { key: k, value: v} : k);
			});
			if (!!compare) {
				keys = keys.sort(compare);
			}
			return keys;
		},
		/***************************************************************************
		* The other half of $.keys that is the values function that collects the 
		* values off of the object.
		**************************************************************************/
		values: function (obj) {
			var vals = [];
			$.each(obj, function (k, v) { vals.push(v); });
			return vals;
		},
		/******************************************************************************
		*	This adds a comparator function capable of sorting arrays of the form:
		*		array = [
		*			{ key:[key], value:[value] },
		*			{ key:[key], value:[value] },
		*			...
		*		];
		*	in natural order by the values found in [key] so long as each key can be
		*	naturally sorted.
		*****************************************************************************/
		pairComparator: function (a, b) {
			if (a.key < b.key) {
				return -1;
			} else if (a.key == b.key) {
				return 0
			} else {
				return 1;
			}
		},
		/*****************************************************************************
		* Produces a set from the array, mapping each value to true.
		****************************************************************************/
		set: function (a) {
			if (!!a && a.constructor == Array) {
				var set = {};
				$.each(a, function (i, e) {
					set[e] = set[e] || true;
				})
				return set;
			}
		},
		/*****************************************************************************
		* Produces the set union of two sequences.
		****************************************************************************/
		union: function (a) {

			if (!arguments.length) { return; }

			var result = (a.constructor == Object) ? a : this.set(a);

			for (var i = 1; i < arguments.length; i++) {
				result = union(result, this.set(arguments[i]));
			}

			return result;
		},
		/*************************************************************************
		 * A function to create flexibly-numbered lists of integers, handy for
		 * each and map loops. start, if omitted, defaults to 0; step defaults
		 * to 1. Returns a list of integers from start to stop, incremented
		 * (or decremented) by step, exclusive.
		 ************************************************************************/
		to:function( stop, step ) {

			step = step || 1;
			var start = this.first();
			var rv = [];

			if (start < stop) {
				for (var i = start; i < stop; i+=step) {
					rv.push(i);
				}
			} else {
				for (var i = start; i > stop; i+=step) {
					rv.push(i);
				}
			}
			return _(rv);
		}
	};

	$.extend(_.mixins, mixins);

})(jQuery, jynx);