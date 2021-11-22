function chngTxtClr() {
  var chngTxtClr = prompt("What color you want to change for text?");
  document.getElementById("chngClr").style.color = chngTxtClr;
  if (chngTxtClr === "") {
    alert("Please enter a color name");
  }
}

function chngBgClr() {
  var chngBgClr = prompt("What color you want to change for the background?");
  document.getElementById("chngClr").style.backgroundColor = chngBgClr;
  if (chngBgClr === "") {
    alert("Please enter a color name");
  }
}

function showImg() {
  document.getElementById("img").style.visibility = "visible";
  document.getElementById("txt").style.visibility = "hidden";
}

function bigImg() {
  document.getElementById("img").style.width = "553px";
  document.getElementById("img").style.height = "311px";
}

function smallImg() {
  document.getElementById("img").style.width = "100px";
  document.getElementById("img").style.height = "100px";
}

function hideImg() {
  document.getElementById("img").style.visibility = "hidden";
  document.getElementById("txt").style.visibility = "visible";
}

function bulbToggler(id, element) {
  if (id == 1) {
    element.src = "./images/on.gif";
  } else {
    element.src = "./images/off.gif";
  }
}

function chngParaClr(){
    var paraClr1 = prompt("Write a color name for 1 para")
    var paraClr2 = prompt("Write a color name for 2 para")
    var paraClr3 = prompt("Write a color name for 3 para")
    var paraClr4 = prompt("Write a color name for 4 para")
    document.getElementsByTagName("P")[0].style.color = paraClr1;
    document.getElementsByTagName("P")[1].style.color = paraClr2;
    document.getElementsByTagName("P")[2].style.color = paraClr3;
    document.getElementsByTagName("P")[3].style.color = paraClr4;
}
