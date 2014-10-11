



setTimeout(function(){
    var gradient = d3.select("svg").append("svg:defs")
        .append("svg:radialGradient")
        .attr("id", "gradient")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "100%")
        .attr("spreadMethod", "pad");

    gradient.append("svg:stop")
        .attr("offset", "0%")
        .attr("stop-color", "#C00")
        .attr("stop-opacity", 1);

    gradient.append("svg:stop")
        .attr("offset", "100%")
        .attr("stop-color", "#F66")
        .attr("stop-opacity", 1);

    

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
            .style('fill','url(#gradient)')
    })
}, 1000)


setTimeout(function(){
    var gradient = d3.select("svg").append("svg:defs")
        .append("svg:radialGradient")
        .attr("id", "gradient2")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "100%")
        .attr("spreadMethod", "pad");

    gradient.append("svg:stop")
        .attr("offset", "0%")
        .attr("stop-color", "#0C0")
        .attr("stop-opacity", 1);

    gradient.append("svg:stop")
        .attr("offset", "100%")
        .attr("stop-color", "#9f9")
        .attr("stop-opacity", 1);

    d3.csv("MonthlyAvgHouse.csv", function(error, data) {
        console.log(data)
        var houses = d3.select("svg").append("g")
        var bound = houses.selectAll("circle").data(data)
        bound.enter()
            .append("circle")
            .attr("r", function(d) {
                return +d["max_generated"]
            })
            .attr("cx", function(d) {
                return projection([+d["longitude"], +d["latitude"]])[0]
            })
            .attr("cy", function(d) {
                return projection([+d["longitude"], +d["latitude"]])[1]
            })
            .style('fill','url(#gradient2)')
    })
}, 1000)

