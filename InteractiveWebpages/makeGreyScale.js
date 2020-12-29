//global image
var image;
var imageGray;
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
  imageGray=image;
  //showing image in the canvas
  image.drawTo(imgcanvas);
}

function makeGray(){
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

