//global image
var image=null;
var imageGray =null;
var imageRed = null;
var imageGreen = null;
var imageBlue = null;
var imageBlur = null;
var imageContrast = null;
var imageRainbow = null;
function upload() {
  //initializing the finput with text
  var fileinput = document.getElementById("finput");
  var filename = fileinput.value;
  //alert dialougue will be shown with filename
  alert("Chose " + filename);
}

function uploadImage(){
  var imgcanvas = document.getElementById("d2");
  var fileinput = document.getElementById("finputImage");
  //taking the image from fileinput and create by the library SimpleImage
  image = new SimpleImage(fileinput);
  imageGray=new SimpleImage(fileinput);
  imageRed=new SimpleImage(fileinput);
  imageGreen=new SimpleImage(fileinput);
  imageBlue=new SimpleImage(fileinput);
  imageBlur=new SimpleImage(fileinput);
  imageContrast=new SimpleImage(fileinput);
  imageRainbow=new SimpleImage(fileinput);
  //showing image in the canvas
  image.drawTo(imgcanvas);
}

function makeGray(){
  if(imageIsLoaded(imageGray)){
  for(var pixel of imageGray.values()){
    //calculating the average
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    //setting the avg value to red,blue and green pixel
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //getting tha canvas id and putting the image as greyscale
  var imgcanvas = document.getElementById("d2");
  imageGray.drawTo(imgcanvas);
  }
}

function makeRed(){
  if(imageIsLoaded(imageRed)){
  for(var pixel of imageRed.values()){
    var avg=(pixel.getRed()+pixel.getBlue()+pixel.getRed())/3
    if(avg<128){
      pixel.setBlue(0);
      pixel.setRed(2*avg);
      pixel.setGreen(0);
    }
    else
      {
      pixel.setBlue((2*avg)-255);
      pixel.setRed(255);
      pixel.setGreen((2*avg)-255);
      }
  }
  var imgCanvas = document.getElementById("d2");
   
  imageRed.drawTo(imgCanvas);
  }
}


function showOriginal(){
  if(imageIsLoaded(image)){
  var imgcanvas = document.getElementById("d2");
  image.drawTo(imgcanvas);
  imageGray=new SimpleImage(image);
  imageRed=new SimpleImage(image);
  imageGreen=new SimpleImage(image);
  imageBlue=new SimpleImage(image);
  imageBlur=new SimpleImage(image);
  imageContrast=new SimpleImage(image);
  imageRainbow=new SimpleImage(image);
  }
}

function imageIsLoaded(image){
  if (image == null || !image.complete()) {
    alert("Image not loaded");
    return false;
  } else {
    return true;
  }
}

function makeGreen(){
  if (imageIsLoaded(image)) {
    for(var pixel of imageGreen.values()){
      pixel.setBlue(0);
      pixel.setRed(0);
    }
  }
  var imgCanvas = document.getElementById("d2");
  imageGreen.drawTo(imgCanvas);
  
  
}

function makeBlue(){
  if (imageIsLoaded(image)) {
    for(var pixel of imageBlue.values()){
      pixel.setGreen(0);
      pixel.setRed(0);
    }
  }
  var imgCanvas = document.getElementById("d2");
  imageBlue.drawTo(imgCanvas);
  
  
}

function blurImage(){
  if(imageIsLoaded(image)){
    for (var pixel of imageBlur.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (Math.random() > 0.5) {
        var other = getPixelNearby(imageBlur, x, y, 10);
        imageBlur.setPixel(x, y, other);
    }
    else {
        imageBlur.setPixel(x, y, pixel);
    }
}
    
    function ensureInImage (coordinate, size) {
    // coordinate cannot be negative
    if (coordinate < 0) {
        return 0;
    }
    // coordinate must be in range [0 .. size-1]
    if (coordinate >= size) {
        return size - 1;
    }
    return coordinate;
}

function getPixelNearby (image, x, y, diameter) {
    var dx = Math.random() * diameter - diameter / 2;
    var dy = Math.random() * diameter - diameter / 2;
    var nx = ensureInImage(x + dx, image.getWidth());
    var ny = ensureInImage(y + dy, image.getHeight());
    return image.getPixel(nx, ny);
}


var imgCanvas = document.getElementById("d2");
imageBlur.drawTo(imgCanvas);

  }
}

function changeContrast(){
  var input = document.getElementById("sldr");
  var quantity = input.value;

  if(imageIsLoaded(image)){
  for(var pixel of imageContrast.values()){
    if((pixel.getGreen()-quantity)>0 ){
      pixel.setGreen(pixel.getGreen()-quantity);
    }
    if((pixel.getRed()-quantity)>0){
      pixel.setRed(pixel.getRed()-quantity);
    }
    if((pixel.getBlue()-quantity)>0){
      pixel.setBlue(pixel.getBlue()-quantity);
    }
  }
      
  }
var imgCanvas = document.getElementById("d2");
imageContrast.drawTo(imgCanvas);
  
  
}

function makeRainbow() {
    if (imageIsLoaded(image)) {
        var height = imageRainbow.getHeight();
        for (var pixel of imageRainbow.values()) {
            var y = pixel.getY();
            var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
            if (y < height / 7) {
                //red
                if (avg < 128) {
                    pixel.setRed(2 * avg);
                    pixel.setGreen(0);
                    pixel.setBlue(0);
                } else {
                    pixel.setRed(255);
                    pixel.setGreen(2 * avg - 255);
                    pixel.setBlue(2 * avg - 255);
                }
            } else if (y < height * 2 / 7) {
                //orange
                if (avg < 128) {
                    pixel.setRed(2 * avg);
                    pixel.setGreen(0.8 * avg);
                    pixel.setBlue(0);
                } else {
                    pixel.setRed(255);
                    pixel.setGreen(1.2 * avg - 51);
                    pixel.setBlue(2 * avg - 255);
                }
            } else if (y < height * 3 / 7) {
                //yellow
                if (avg < 128) {
                    pixel.setRed(2 * avg);
                    pixel.setGreen(2 * avg);
                    pixel.setBlue(0);
                } else {
                    pixel.setRed(255);
                    pixel.setGreen(255);
                    pixel.setBlue(2 * avg - 255);
                }
            } else if (y < height * 4 / 7) {
                //green
                if (avg < 128) {
                    pixel.setRed(0);
                    pixel.setGreen(2 * avg);
                    pixel.setBlue(0);
                } else {
                    pixel.setRed(2 * avg - 255);
                    pixel.setGreen(255);
                    pixel.setBlue(2 * avg - 255);
                }
            } else if (y < height * 5 / 7) {
                //blue
                if (avg < 128) {
                    pixel.setRed(0);
                    pixel.setGreen(0);
                    pixel.setBlue(2 * avg);
                } else {
                    pixel.setRed(2 * avg - 255);
                    pixel.setGreen(2 * avg - 255);
                    pixel.setBlue(255);
                }
            } else if (y < height * 6 / 7) {
                //indigo
                if (avg < 128) {
                    pixel.setRed(.8 * avg);
                    pixel.setGreen(0);
                    pixel.setBlue(2 * avg);
                } else {
                    pixel.setRed(1.2 * avg - 51);
                    pixel.setGreen(2 * avg - 255);
                    pixel.setBlue(255);
                }
            } else {
                //violet
                if (avg < 128) {
                    pixel.setRed(1.6 * avg);
                    pixel.setGreen(0);
                    pixel.setBlue(1.6 * avg);
                } else {
                    pixel.setRed(0.4 * avg + 153);
                    pixel.setGreen(2 * avg - 255);
                    pixel.setBlue(0.4 * avg + 153);
                }
            
            }
        }

    }
    var imgCanvas = document.getElementById("d2");
    imageRainbow.drawTo(imgCanvas);
}

  
