# VectorStream

## Gaining a Stream

```javascript

$('#canvas').stream();

```

## Example Drawing a Line

```javascript

$("#canvas")
	.stream()
	.write([
		"beginPath",
			{ method:"moveTo", args:[0, 0] },
			{ method:"lineTo", args:[dim.x, dim.y] },
		"stroke"
	])
	.flush();

```

## Harness Html

See example `Vector-Stream.html` which demonstrates the simple setup which
includes a minimal set of CSS files, and Script tags that include
`jquery-1.8.2.min.js`, the Jynx library (a Linq like library for JavaScript).

The actual source code for the VectorStream library lives in the `Src`
directory.  It includes Colors.js, General.Plugins.js, Vector.Stream.Writer.js,
and Vec.js.  The other files in this project are included in the repo
mearly to help create drawings, and also the Examples.

