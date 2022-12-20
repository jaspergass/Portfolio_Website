// from https://codepen.io/koko-hranghlu/pen/vYRzvRo

const gridImages = document.querySelectorAll(".grid > img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// to open lightbox
gridImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    // set the image clicked as the image of the lightbox
    lightboxImg.src = img.src;
  });
});

// To close lightbox
lightbox.addEventListener("click", (e) => {
  // if the clicked element is not the dark overlay don't close it
  if (e.target !== e.currentTarget) return;
  // if it was the dark overlay it will close it
  lightbox.classList.remove("active");
});


//from https://codepen.io/Pennedweb/pen/LYNpoZb
function showHide(ele) {
  var srcElement = document.getElementById(ele);

  if (srcElement != null) {
      if (srcElement.style.display == "block") {
          srcElement.style.display = 'none';
      }
      else {
          srcElement.style.display = 'block';
      }
      return false;
  }
}