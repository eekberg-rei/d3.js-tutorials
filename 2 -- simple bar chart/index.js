const data = [30, 86, 168, 281, 303, 365];

d3.select('.chart')
        .select('div')
        .data(data)
                .enter()
                .append('div')
                .attr('class', 'chart-item')
                .style('width', function (d) { return d + 'px'; } )
                .style('background-color', 'steelblue')
                .style('text-align', 'right')
                .text(function (d) { return d; });