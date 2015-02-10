// This example works with Charts.js
// it isn't the final choice, just something to fiddle with
function createCanvas(description,container) {
    var canvas1 = document.createElement("canvas");
    var header = document.createElement("h2");
    header.innerText = description;
    container.appendChild(header);
    container.appendChild(canvas1);
    
    // bugfix because chart.js requires height attributes
    canvas1.height = canvas1.clientHeight;
    canvas1.width = canvas1.clientWidth;
    
    // attach a context
    var ctx = canvas1.getContext("2d");
    return ctx;
}

window.onload = function() {
    // get container
    var container = document.getElementById("exampleID");

    var complexData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [0.5, 0.9, 0.1, 0.81, 0.56, 0.55, 0.40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [0.28, 0.48, 0.40, 0.19, 0.86, 0.27, 0.90]
            }
        ]
    };
    
    var roundData = [
        {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
        {
            value: 40,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },
        {
            value: 120,
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }

    ];
    
 

    var ctx = createCanvas("Bar Chart chart", container);
    var lineChart = new Chart(ctx).Bar(complexData , {bezierCurve: true});

    var ctx = createCanvas("Radar chart", container);
    var lineChart = new Chart(ctx).Radar(complexData , {bezierCurve: true});
    
    var ctx = createCanvas("Line chart", container);
    var lineChart = new Chart(ctx).Line( complexData, {bezierCurve: true});

    ctx = createCanvas("Polar chart", container);
    new Chart(ctx).PolarArea(roundData,{segmentShowStroke : false, legendTemplate:""});
    
    ctx = createCanvas("Pie chart", container);
    new Chart(ctx).Pie(roundData,{segmentShowStroke : false, legendTemplate:""});

    ctx = createCanvas("Doughnut chart", container);
    new Chart(ctx).Doughnut(roundData,{segmentShowStroke : false, legendTemplate:""});

};
