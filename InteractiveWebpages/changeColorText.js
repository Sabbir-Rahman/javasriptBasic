//change color function
function changecolor1(){
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");
  
  //define the class name
  dd1.className = "lightblueback";
  dd2.className = "orangeredback";
}
function changecolor2(){
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");
  
  //define the class name
  dd1.className = "chocolateback";
  dd2.className = "cyanback";
}
function changecolor3(){
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");
  
  //define the class name
  dd1.className = "lawngreenback";
  dd2.className = "hotpinkback";
}

//changing text
function changetext1(){
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");
  //Hello will be replaced by Bonjour
  //Goodbye will be replaced by Sayonara
  dd1.innerHTML = "This is my first Interactive website";
  dd2.innerHTML = "It looks very noob right?";
}

function changetext2(){
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");
  //Hello will be replaced by Bonjour
  //Goodbye will be replaced by Sayonara
  dd1.innerHTML = "But it looks fantastic to me";
  dd2.innerHTML = "as it is my first website";
}

function changetext3(){
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");
  //Hello will be replaced by Bonjour
  //Goodbye will be replaced by Sayonara
  dd1.innerHTML = "Stay at home and stay safe";
  dd2.innerHTML = "Goodbye";
}