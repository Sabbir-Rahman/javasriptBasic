function docolor(){
  //taking the canvas id
  var dd1 = document.getElementById("d1");
  //taking the color input id which is "clr"
  var colorinput = document.getElementById("clr");
  //declaring a variable and take the input color
  var color = colorinput.value;
  //setting the background color
  dd1.style.backgroundColor = color;
}

function dosquare(){
  var dd1 = document.getElementById("d1");
  //sldr is the id of the slider
  var sizeinput = document.getElementById("sldr");
  //creating value for size
  var size = sizeinput.value;
  //creating the context
  var ctx = dd1.getContext("2d");
  //clearing context
  ctx.clearRect(0,0,dd1.width,dd1.height);
  ctx.fillStyle = "yellow";
  ctx.fillRect(10,10,size,size);
}