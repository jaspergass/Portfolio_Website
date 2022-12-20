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
  var lightswitch = document.getElementById("lightswitch");
  var switchState = new Boolean(true);

  if (srcElement != null) {
      if (srcElement.style.display == "block") {
          srcElement.style.display = 'none';
          lightswitch.style.backgroundImage = "url(../img/switch.jpg)";
          lightswitch.style.cursor = "url(../img/cursor-hover.svg) 17.5 17.5, auto";
      }
      else {
          srcElement.style.display = 'block';
          lightswitch.style.backgroundImage = "url(../img/switch2.jpg)";
          lightswitch.style.cursor = "url(../img/cursor-white-hover.svg) 17.5 17.5, auto";
      }
      return false;
  }
}