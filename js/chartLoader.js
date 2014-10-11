/**
 * Created by ddcjoshuad on 10/11/14.
 */

//$(document).ready(function(){
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(function(){
    drawChart("test")
});

function drawChart(stationName) {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Power'],
        ['2004',  1000],
        ['2005',  1170],
        ['2006',  660],
        ['2007',  1030]
    ]);

    var options = {
        title: 'Total Generation: '+stationName,
        legend: {position: 'none'}
    };

    var chart = new google.visualization.LineChart(document.getElementById('powerplantChart'));

    chart.draw(data, options);
    drawPieChart()
}

function drawPieChart() {
    var data = google.visualization.arrayToDataTable([
        ['Source', ''],
        ['Nuclear', 6.5],
        ['Hydro',    46.8],
        ['Oil & Nat. Gas',  0.8],
        ['Wood', 3.8],
        ['Methane',    1.4],
        ['Wind', 9.3],
        ['Solar', 0.5],
        ['Other', 30.8]
    ]);

    var options = {
//        title: 'Total Generation By Type',
        titlePosition: 'none',
        pieHole: 0.4,
        height: 300,
        chartArea: 0,
        legend: {position: 'none'}


    };

    var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
    chart.draw(data, options);
}
//});