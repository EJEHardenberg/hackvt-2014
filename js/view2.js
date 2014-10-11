
setTimeout(function(){
    d3.csv("MonthlyAvgHouse.csv", function(error, data) {
        console.log(data)
        var houses = d3.select("svg").append("g")
        var bound = houses.selectAll("circle").data(data)
        bound.enter()
            .append("circle")
            .attr("r", function(d) {
                return +d["max_consumed"]
            })
            .attr("cx", function(d) {
                return projection([+d["longitude"], +d["latitude"]])[0]
            })
            .attr("cy", function(d) {
                return projection([+d["longitude"], +d["latitude"]])[1]
            })
            .style('fill','#000')
    })
}, 1000)