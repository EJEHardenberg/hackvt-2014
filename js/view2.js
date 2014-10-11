



function drawDots(){
    
    var container = d3.select("#map-container")
    var image = d3.select("#montpelier")
        .style("position", "absolute")
        .style("top", "0")
        .style("left","0")
        .style("width","0")
        .style("height","0")
        .style("display","block")
        .transition()
            .style("width","70%")
            .style("height","70%")
            .style("left","150px")

        

    window.image = image
     
}

