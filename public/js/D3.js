var data = [4, 8, 15, 16, 23, 30, 100, 40, 55];

var height = 200,
	width = 720,
	barWidth = 40,
	barOffset = 20;

var yScale = d3.scale.linear()
	.domain([0, d3.max(data)])
	.range([0, height])

d3.select('.chart').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('background', 'white')
	.selectAll('rect').data(data)
	.enter().append('rect')
	.style({
		'fill': 'gray',
		'stroke': 'black',
		'stroke-width': '2'
	})
	.attr('width', barWidth)
	.attr('height', function (data) {
		return yScale(data);
	})
	.attr('x', function (data, i) {
		return i * (barWidth + barOffset);
	})
	.attr('y', function (data) {
		return height - yScale(data);
	});