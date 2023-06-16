var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex + n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  if (n >= x.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = x.length - 1;
  } else {
    slideIndex = (n + x.length) % x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex].style.display = "block";
}