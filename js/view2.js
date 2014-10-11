



function drawDots(){
    var gradient = d3.select("#svgmap").append("svg:defs")
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

    
    var avgData = []
    d3.csv("MonthlyAvgHouse.csv", function(error, data) {
        avgData = data
        var houses = d3.select("#svgmap").append("g").attr("id","avghouseg")
        var bound = houses.selectAll("circle").data(avgData, function(d){
            return( d && d['longitude'] + d['latitude'] +d["max_consumed"]) 
        })
        bound.enter()
            .append("circle")
            .attr("cx", function(d) {
                return projection([+d["longitude"], +d["latitude"]])[0]
            })
            .attr("cy", function(d) {
                return projection([+d["longitude"], +d["latitude"]])[1]
            })
            .attr("transform", function(d){
                return "translate(155,185)"
            })
            .attr("r", function(d) {
                return +d["max_consumed"]
            })
            .style('fill','url(#gradient)')
            .attr("r",0)
            .transition()
            .attr("r", function(d) {
                return +d["max_consumed"]
            })
        bound.exit().remove()
    })
    drawMoreDots(avgData);
}


function drawMoreDots(data){
    var gradient = d3.select("#svgmap").append("svg:defs")
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

    var houses = d3.select("#svgmap").append("g").attr("id", "avghouse2")
    var bound = houses.selectAll("circle").data(data, function(d){
        return (d && d['longitude'] + d['latitude'] +d["max_generated"])
    })
      
    bound.append("circle")
        .attr("r", function(d) {
            return +d["max_generated"]
        })
        .attr("cx", function(d) {
            return projection([+d["longitude"], +d["latitude"]])[0]
        })
        .attr("cy", function(d) {
            return projection([+d["longitude"], +d["latitude"]])[1]
        })/*
        .attr("transform", function(d){
            var cx = d3.select(this).attr("cx")
            var cy = d3.select(this).attr("cy")
            return "translate(" + (cx*zoomVar.xAdj) +","+ (cy*zoomVar.yAdj)+")"
        })*/
        .style('fill','url(#gradient2)')
}

