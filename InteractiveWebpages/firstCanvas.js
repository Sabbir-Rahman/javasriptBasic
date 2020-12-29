// JavaScript source code
//change color only with java script
function dolime1() {
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor = "lime";
}
function pinkBack() {
    var html = document.getElementById("h");
    html.className = "hotpinkback";
}
function limeBack() {
    var html = document.getElementById("h");
    html.className = "limeback";
}
function yellowBack() {
    var html = document.getElementById("h");
    html.className = "yellowback";
}
function redBack() {
    var html = document.getElementById("h");
    html.className = "redback";
}
function whiteBack() {
    var html = document.getElementById("h");
    html.className = "whiteback";
}
function dolime2() {
    var dd2 = document.getElementById("d2");
    dd2.style.backgroundColor = "lime";
}

function doblue1() {
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor = "blue";
}

function doblue2() {
    var dd2 = document.getElementById("d2");
    dd2.style.backgroundColor = "blue";
}

function doRedBox2Text() {
    var dd2 = document.getElementById("d2");
    dd2.style.backgroundColor = "white";
    var ctx = dd2.getContext("2d");
    ctx.fillStyle = "Red";
    ctx.fillStyle = "Red";
    ctx.fillRect(105, 45, 80, 60);


    ctx.fillStyle = "yellow";
    ctx.font = "25px Arial"
    ctx.fillText("Hello", 115, 80);
}
function doRedBox1Text() {
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor = "white";
    var ctx = dd1.getContext("2d");
    ctx.fillStyle = "Red";
    ctx.fillRect(105, 45, 80, 60);


    ctx.fillStyle = "yellow";
    ctx.font = "25px Arial"
    ctx.fillText("Hello", 115, 80);
}

function doyellowBox1() {
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor = "white";
    //making yellow boxes
    //getContext
    var ctx = dd1.getContext("2d");
    //drawing fill color
    ctx.fillStyle = "yellow";
    //creating rectangle first two indicate left upper co-ordinate and next two is height and width
    ctx.fillRect(10, 10, 40, 40);
    ctx.fillRect(60, 10, 40, 40);

    //creating font
    //creating font color
    ctx.fillStyle = 'black';
    //creating font size and family
    ctx.font = "30px Arial"
    //creating text two numbers are starting co-ordinate
    ctx.fillText("Hello", 10, 100);
}

function doyellowBox2() {
    var dd2 = document.getElementById("d2");
    dd2.style.backgroundColor = "white";
    //making yellow boxes
    //getContext
    var ctx = dd2.getContext("2d");
    //drawing fill color
    ctx.fillStyle = "yellow";
    //creating rectangle first two indicate left upper co-ordinate and next two is height and width
    ctx.fillRect(10, 10, 40, 40);
    ctx.fillRect(60, 10, 40, 40);

    //creating font
    //creating font color
    ctx.fillStyle = 'black';
    //creating font size and family
    ctx.font = "30px Arial"
    //creating text two numbers are starting co-ordinate
    ctx.fillText("Hello", 10, 100);
}

function doWhite1() {
    var dd1 = document.getElementById("d1");
    var ctx = dd1.getContext("2d");
    ctx.clearRect(0, 0, 200, 150);
    dd1.style.backgroundColor = "white";
}

function doWhite2() {
    var dd2 = document.getElementById("d2");
    var ctx = dd2.getContext("2d");
    ctx.clearRect(0, 0, 200, 150);
    dd1.style.backgroundColor = "white";



}

function makeFlag() {
    var dd3 = document.getElementById("d3");
    dd3.style.backgroundColor = "green";
    var ctx = dd3.getContext("2d");

    //make circle

    ctx.beginPath();
    //context.arc(x,y,r,sAngle,eAngle,counterclockwise)
    //x=The x-coordinate of the center of the circle
    //y=The y-coordinate of the center of the circle
    //r=The radius of the circle
    //sAngle=The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
    //eAngle=The ending angle, in radians
    //counterclockwise=Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
    ctx.arc(145, 75, 50, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();
}