var data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120,
	135, 150, 165, 180, 200, 220, 240, 270, 300, 330, 370, 410
];

var height = 200,
	width = 720,
	barWidth = 40,
	barOffset = 20;

var yScale = d3.scale.linear()
	.domain([0, d3.max(data)])
	.range([0, height])

var xScale = d3.scale.ordinal()
	.domain(d3.range(0, data.length))
	.rangeBands([0, width])

d3.select('.chart').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('background', 'white')
	.selectAll('rect').data(data)
	.enter().append('rect')
	.style({
		'fill': '#eeeeee',
		'stroke': 'black',
		'stroke-width': '2'
	})
	.attr('width', xScale.rangeBand())
	.attr('height', function (data) {
		return yScale(data);
	})
	.attr('x', function (data, i) {
		return xScale(i);
		// return i * (barWidth + barOffset);
	})
	.attr('y', function (data) {
		return height - yScale(data);
	});