;(function (undefined) {

	/** This funciton normalizes an object to an array. */
	function ToArray( collection, fn ) {

		if (collection === undefined) {
			return [];
		}

		var col = [].concat( collection );

		if ( col.constructor != Array) {
			col = [];
			for (var p in collection) {
				col.push({key:p, value:collection[p]});
			}
		}

		return col;
	};

	/** Creates a single instance with */
	function ToWrapper( array ) {
		return $.extend( [].concat( array ), mixins);
	}

	/** The public interface -- much like th $ in jQuery. */
	var jynx = function( collection ) {
		return ToWrapper( ToArray( collection ) );
	};

	var mixins = {
		first:function() {
			return this[0];
		},
		toArray:function() {
			return $.map( this, function(e,i) { return e } );
		},
		select:function( fn ) {
			return _( $.map( this, fn ) );
		},
		where:function( pred, invert ) {
			return _( $.grep( this, pred, invert ) );
		},
		toDicionary:function( keyFn, valueFn ) {
			return _( $.map( this,
				function(e,i) {
					return {key:keyFn(e,i), value:valueFn(e,i)}
				}));
		},
		find:function( pred, invert ) {
			return _( $.grep( this, pred, invert ) ).first();
		},
		take:function( count ) {
			return _( $.grep( this, function(e,i) { return i < count; } ));
		},
		skip:function( count ) {
			return _( $.grep( this, function(e, i) { return i >= count; } ));
		},
		reverse:function() {
			var a = [].concat( this );
			Array.prototype.reverse.call( a );
			return _( a );
		},
		all:function( fn ) {
			var rv = true;
			for (var i = 0; rv && i < this.length; i++) {
				rv = fn( this[i] );
			}
			return rv;
		},
		any:function( fn ) {
			var rv = false;
			for (var i = 0; !rv && i < this.length; i++) {
				rv = fn( this[i] );
			}
			return rv;
		},
		arggregate:function() {
		},
		concat:function() {
		},
		distinct:function() {
		},
		elementAt:function() {
		},
		except:function() {
		},
		groupBy:function() {
		},
		intersect:function() {
		},
		last:function() {
			return this[ this.length - 1 ];
		},
		join:function() {
		},
		max:function() {
		},
		min:function() {
		},
		orderBy:function() {
		},
		//TODO: change all of this to aggregate, or something
		selectMany:function( fn ) {
			var many = this.select( fn );
			var rv = [];
			many.select(function(e,i) {
				rv = rv.concat( e );
				return e;
			});
			return rv;
		},
		sequenceEqual:function( seq, compareFn ) {

			var rv = !!(this.length && seq.length && (this.length == seq.length));
			var fn = compareFn || function(a,b) { return a == b; };

			seq = _(seq); // defaulting the sequence to an empty list.

			for (var i = 0; rv && i < this.length; i++) {
				rv = fn( this[i], seq[i] );
			}
			return rv;
		},
		takeWhile:function() {
		},
		zip:function( seq, resultFn ) {

			var rv = [];
			var fn = resultFn || function(a,b) { return {key:a, value:b}; };

			seq = _(seq); // defaulting the sequence to an empty list.

			for (var i = 0; rv && i < this.length; i++) {
				rv.push( fn( this[i], seq[i] ) );
			}
			return _(rv);

		},
		toLookup:function() {
		},
		sum:function() {
		}
	};

	jynx.mixins = mixins;

	window["jynx"] = jynx;
	this._ = !!window["_"] ? window["_"] : jynx;

})();

