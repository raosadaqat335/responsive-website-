// Get the image gallery container
const galleryContainer = document.getElementById("imageGallery");

// Add a click event listener to each image
const images = galleryContainer.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", openLightbox);
}

// Lightbox functionality
function openLightbox(event) {
  const clickedImage = event.target;

  // Create the lightbox container
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";

  // Create the lightbox image
  const lightboxImage = document.createElement("img");
  lightboxImage.src = clickedImage.src;
  lightboxImage.alt = clickedImage.alt;

  // Add the lightbox image to the container
  lightbox.appendChild(lightboxImage);

  // Add the lightbox to the document
  document.body.appendChild(lightbox);

  // Add a click event listener to close the lightbox
  lightbox.addEventListener("click", closeLightbox);
}

function closeLightbox(event) {
  if (event.target.id === "lightbox") {
    // Remove the lightbox from the document
    event.target.remove();
  }
}
window.addEventListener("scroll", function () {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var backToTopButton = document.querySelector(".back-to-top");

  if (scrollPosition > 300) {
    backToTopButton.classList.add("show-back-to-top");
  } else {
    backToTopButton.classList.remove("show-back-to-top");
  }
});

document
  .querySelector(".back-to-top")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
