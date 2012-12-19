function ____w(context) {
	return {
		DRAWWINDOW_ASYNC_DECODE_IMAGES: function (v) {
			context.DRAWWINDOW_ASYNC_DECODE_IMAGES = v;
			return context;
		},
		DRAWWINDOW_DO_NOT_FLUSH: function (v) {
			context.DRAWWINDOW_DO_NOT_FLUSH = v;
			return context;
		},
		DRAWWINDOW_DRAW_CARET: function (v) {
			context.DRAWWINDOW_DRAW_CARET = v;
			return context;
		},
		DRAWWINDOW_DRAW_VIEW: function (v) {
			context.DRAWWINDOW_DRAW_VIEW = v;
			return context;
		},
		DRAWWINDOW_USE_WIDGET_LAYERS: function (v) {
			context.DRAWWINDOW_USE_WIDGET_LAYERS = v;
			return context;
		},
		arc: function () {
			var a = Array.prototype.slice.call(arguments);
			context.arc.apply(this.context, a);
			return this;
		},
		arcTo: function () {
			var a = Array.prototype.slice.call(arguments);
			context.arcTo.apply(this.context, a);
			return this;
		},
		asyncDrawXULElement: function () {
			var a = Array.prototype.slice.call(arguments);
			context.asyncDrawXULElement.apply(this.context, a);
			return this;
		},
		beginPath: function () {
			var a = Array.prototype.slice.call(arguments);
			context.beginPath.apply(this.context, a);
			return this;
		},
		bezierCurveTo: function () {
			var a = Array.prototype.slice.call(arguments);
			context.bezierCurveTo.apply(this.context, a);
			return this;
		},
		canvas: function () {
			return context.canvas;
		},
		clearRect: function () {
			var a = Array.prototype.slice.call(arguments);
			context.clearRect.apply(this.context, a);
			return this;
		},
		clip: function () {
			var a = Array.prototype.slice.call(arguments);
			context.clip.apply(this.context, a);
			return this;
		},
		closePath: function () {
			var a = Array.prototype.slice.call(arguments);
			context.closePath.apply(this.context, a);
			return this;
		},
		createImageData: function () {
			var a = Array.prototype.slice.call(arguments);
			context.createImageData.apply(this.context, a);
			return this;
		},
		createLinearGradient: function () {
			var a = Array.prototype.slice.call(arguments);
			context.createLinearGradient.apply(this.context, a);
			return this;
		},
		createPattern: function () {
			var a = Array.prototype.slice.call(arguments);
			context.createPattern.apply(this.context, a);
			return this;
		},
		createRadialGradient: function () {
			var a = Array.prototype.slice.call(arguments);
			context.createRadialGradient.apply(this.context, a);
			return this;
		},
		drawImage: function () {
			var a = Array.prototype.slice.call(arguments);
			context.drawImage.apply(this.context, a);
			return this;
		},
		drawWindow: function () {
			var a = Array.prototype.slice.call(arguments);
			context.drawWindow.apply(this.context, a);
			return this;
		},
		fill: function () {
			var a = Array.prototype.slice.call(arguments);
			context.fill.apply(this.context, a);
			return this;
		},
		fillRect: function () {
			var a = Array.prototype.slice.call(arguments);
			context.fillRect.apply(this.context, a);
			return this;
		},
		fillStyle: function (v) {
			context.fillStyle = v;
			return context;
		},
		fillText: function () {
			var a = Array.prototype.slice.call(arguments);
			context.fillText.apply(this.context, a);
			return this;
		},
		font: function (v) {
			context.font = v;
			return context;
		},
		getImageData: function () {
			var a = Array.prototype.slice.call(arguments);
			context.getImageData.apply(this.context, a);
			return this;
		},
		globalAlpha: function (v) {
			context.globalAlpha = v;
			return context;
		},
		globalCompositeOperation: function (v) {
			context.globalCompositeOperation = v;
			return context;
		},
		isPointInPath: function () {
			var a = Array.prototype.slice.call(arguments);
			context.isPointInPath.apply(this.context, a);
			return this;
		},
		lineCap: function (v) {
			context.lineCap = v;
			return context;
		},
		lineJoin: function (v) {
			context.lineJoin = v;
			return context;
		},
		lineTo: function () {
			var a = Array.prototype.slice.call(arguments);
			context.lineTo.apply(this.context, a);
			return this;
		},
		lineWidth: function (v) {
			context.lineWidth = v;
			return context;
		},
		measureText: function () {
			var a = Array.prototype.slice.call(arguments);
			context.measureText.apply(this.context, a);
			return this;
		},
		miterLimit: function (v) {
			context.miterLimit = v;
			return context;
		},
		moveTo: function () {
			var a = Array.prototype.slice.call(arguments);
			context.moveTo.apply(this.context, a);
			return this;
		},
		mozCurrentTransform: function () { },
		mozCurrentTransformInverse: function () { },
		mozFillRule: function (v) {
			context.mozFillRule = v;
			return context;
		},
		mozImageSmoothingEnabled: function () {
			return context.mozImageSmoothingEnabled;
		},
		mozTextStyle: function (v) {
			context.mozTextStyle = v;
			return context;
		},
		putImageData: function () {
			var a = Array.prototype.slice.call(arguments);
			context.putImageData.apply(this.context, a);
			return this;
		},
		quadraticCurveTo: function () {
			var a = Array.prototype.slice.call(arguments);
			context.quadraticCurveTo.apply(this.context, a);
			return this;
		},
		rect: function () {
			var a = Array.prototype.slice.call(arguments);
			context.rect.apply(this.context, a);
			return this;
		},
		restore: function () {
			var a = Array.prototype.slice.call(arguments);
			context.restore.apply(this.context, a);
			return this;
		},
		rotate: function () {
			var a = Array.prototype.slice.call(arguments);
			context.rotate.apply(this.context, a);
			return this;
		},
		save: function () {
			context.save();
			return this;
		},
		scale: function () {
			var a = Array.prototype.slice.call(arguments);
			context.scale.apply(this.context, a);
			return this;
		},
		setTransform: function () {
			var a = Array.prototype.slice.call(arguments);
			context.setTransform.apply(this.context, a);
			return this;
		},
		shadowColor: function (v) {
			context.shadowColor = v;
			return context;
		},
		stroke: function () {
			var a = Array.prototype.slice.call(arguments);
			context.stroke.apply(this.context, a);
			return this;
		},
		strokeRect: function () {
			var a = Array.prototype.slice.call(arguments);
			context.strokeRect.apply(this.context, a);
			return this;
		},
		strokeStyle: function (v) {
			context.strokeStyle = v;
			return context;
		},
		strokeText: function () {
			var a = Array.prototype.slice.call(arguments);
			context.strokeText.apply(this.context, a);
			return this;
		},
		textAlign: function (v) {
			context.textAlign = v;
			return context;
		},
		textBaseline: function (v) {
			context.textBaseline = v;
			return context;
		},
		transform: function () {
			var a = Array.prototype.slice.call(arguments);
			context.transform.apply(this.context, a);
			return this;
		},
		translate: function () {
			var a = Array.prototype.slice.call(arguments);
			context.translate.apply(this.context, a);
			return this;
		}
	};
};