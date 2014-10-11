//d3.csv("MonthlyAvgHouse.csv", function(error, houses){
//    var plants = d3.select("svg").append("g")
//
//    var maxGenerated = plants.selectAll("circle").data(+houses.max_generated, function(d){
//        return (d && d['max_generated'])
//    })
//
//    var maxConsumed = plants.selectAll("circle").data(+houses.max_consumed, function(d){
//        return (d && d['max_consumed'])
//    })
//
//    console.log(maxGenerated);
//    console.log(maxConsumed);
//
//})

var projection = d3.geo.transverseMercator()
    .rotate([72.57, -44.20])
    .translate([250,270])
    .scale([17000]);

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



//    return {
//        make: d.max_consumption // convert "Length" column to number
//    };
//}, function(error, rows) {
//    console.log(rows);
//    datas = rows;
//});


//    var fillPowerPlant = function(d){ return color(d['Aggregate Fuel Type'])  }
//
//    bound.enter()
//        .append("circle")
//        .on('click', function(d){
//            if( d.id in window.reportData){
//                statusText
//                    .text("Loading Power Plant data...")
//                    .style("color", "green")
//                loadingBar
//                    .style("display", "block")
//                    .style("opacity", "0")
//                    .transition().duration(animationDuration)
//                    .style("opacity", "1")
//
//
//                var repData = reportData[d.id]
//                if(d.id in window.loadedReportData){
//                    loadingBar.style("display","none")
//                    statusText.text("")
//                    //do something
//                }else{
//                    if(repData && repData.reports){
//                        window.loadedReportData[d.id] = []
//                        for (var i = repData.reports.length - 1; i >= 0; i--) {
//                            var seriesId = repData.reports[i]
//                            d3.json(reportsURL.replace("<SERIES_ID_HERE>", seriesId), function(error, seriesReports){
//                                var j = i
//                                window.loadedReportData[d.id].push(seriesReports.series)
//                                if(j == reportData.reports.length){
//                                    statusText
//                                        .text("Done Loading!")
//                                        .transition().duration(animationDuration)
//                                        .text("")
//                                    loadingBar.transition().duration(animationDuration)
//                                        .style("opacity","0")
//                                        .style("display", "block")
//                                    /* Show all the data we've loaded */
//                                }
//                            })
//                        };
//                    }
//                }
//            }else{
//                statusText
//                    .text("Power Plant has no reporting data")
//                    .style("color", "red")
//            }
//        })
//        .on("mouseover", function(d){
//            var plantColor = color(d['Aggregate Fuel Type']).replace("#","")
//            var tmp = plantColor
//            plantColor = plantColor + plantColor
//            plantColor = plantColor.replace(tmp, '000')
//            d3.select(this)
//                .style('fill', plantColor)
//                .transition().duration(animationDuration/2)
//                .attr("r", circleRadius*3)
//
//            var xPosition = d3.mouse(this)[0];
//            var yPosition = d3.mouse(this)[1] + 30;
//
//            svg.append("text")
//                .attr("id", "tooltip")
//                .attr("x", xPosition)
//                .attr("y", yPosition)
//                .attr("text-anchor", "middle")
//                .attr("font-family", "sans-serif")
//                .attr("font-size", "11px")
//                .attr("font-weight", "bold")
//                .attr("fill", "black")
//                .text(d['Plant Name']);
//
//        })
//        .on("mouseout", function(d){
//            d3.select("#tooltip").remove()
//            d3.select(this)
//                .style('fill', fillPowerPlant(d))
//                .transition().duration(animationDuration/2)
//                .attr("r", circleRadius)
//        })
//        .attr("cx", function(d){ return projection([d.lon,d.lat])[0]})
//        .attr("cy", function(d){ return projection([d.lon, d.lat])[1]})
//        .style("fill", fillPowerPlant)
//        .attr("r", 0)
//        .transition().duration(animationDuration)
//        .attr("r", circleRadius)
//
//    var circles = d3.selectAll("circle")
//    d3.select("#generation-tab").on("click", function(){
//        if(!showingConsumption){return}
//        showingConsumption = false;
//        circles.attr("r",0).transition().attr("r",circleRadius)
//    })
//    d3.select("#consumption-tab").on("click", function(){
//        if(showingConsumption){return}
//        showingConsumption = true;
//        circles.attr("r",circleRadius).transition().attr("r",0)
//    })
