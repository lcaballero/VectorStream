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


