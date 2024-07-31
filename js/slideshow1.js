/* var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
} */

/* document.querySelectorAll(".gen-menu-img").forEach((i) => {
  i.addEventListener("click", (evt) => {
    if (i.classList.contains("zoomed")) {
      i.style.transform = "";
    } else {
      const myScale = 1000 / i.clientWidth;
      i.style.transform = `scale(${myScale})`;
    }
    i.classList.toggle("zoomed");
  });
}); */
