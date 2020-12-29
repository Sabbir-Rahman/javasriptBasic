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
  var image = new SimpleImage(fileinput);
  //showing image in the canvas
  image.drawTo(imgcanvas);
}