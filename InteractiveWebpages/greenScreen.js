// JavaScript source code

var fgImage = null;
var bgImage = null;
var fgcanvas;
var bgcanvas;


function loadForegroundImage() {
    var imgFile = document.getElementById("fgfile");
    fgImage = new SimpleImage(imgFile);
    fgcanvas = document.getElementById("foreground");
    fgImage.drawTo(fgcanvas);

}

function loadBackgroundImage() {
    var imgFile = document.getElementById("bgfile");
    bgImage = new SimpleImage(imgFile);
     bgcanvas = document.getElementById("background");
    bgImage.drawTo(bgcanvas);

}
function createComposite(){
   var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
   var greenThreshold = 250;
    for (var pixel of fgImage.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if (pixel.getGreen() > greenThreshold) {
            var bgPixel = bgImage.getPixel(x, y);
            output.setPixel(x, y, bgPixel);
        }
    else
        {
            //pixel is pixel of fgimage created in for loop
            output.setPixel(x, y, pixel);
        }
    }
     
  return output;
}


function greenScreen() {
 
    if (fgImage == null || !fgImage.complete()) {
        alert("foreground not loaded");
        
    }
    if (bgImage == null || !bgImage.complete()) {
        alert("background not loaded");
        
    }
    clear();
    var finalImage = createComposite();
    finalImage.drawTo(fgcanvas);

   
}

function clear(){
  doClear(fgcanvas);
  doClear(bgcanvas);
}
function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}



