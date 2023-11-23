
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "NavBAr") {
    x.className += " responsive";
  } else {
    x.className = "NavBAr";
  }
}