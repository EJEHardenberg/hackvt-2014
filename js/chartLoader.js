/**
 * Created by ddcjoshuad on 10/11/14.
 */

//$(document).ready(function(){
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Power'],
        ['2004',  1000],
        ['2005',  1170],
        ['2006',  660],
        ['2007',  1030]
    ]);

    var options = {
        title: 'Total Generation',
        legend: {position: 'none'}
    };

    var chart = new google.visualization.LineChart(document.getElementById('powerplantChart'));

    chart.draw(data, options);
    drawPieChart()
}

function drawPieChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ]);

    var options = {
        title: 'My Daily Activities',
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
    chart.draw(data, options);
}
//});