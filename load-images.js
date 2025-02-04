const images = [
  "./public/1.jpg",
  "./public/2.jpg",
  "./public/3.jpg",
  "./public/4.jpg",
  "./public/5.jpg",
  "./public/6.jpg",
  "./public/7.jpg",
  "./public/8.jpg",
  "./public/1.jpg",
  "./public/2.jpg",
  "./public/3.jpg",
  "./public/4.jpg",
  "./public/5.jpg",
  "./public/6.jpg",
  "./public/7.jpg",
  "./public/8.jpg",
];
function loadImages(images = []) {
  const gallery = document.querySelector(".gallery");
  if (gallery && images?.length > 0) {
    gallery.innerHTML = "";
    images.forEach((image) => {
      const imgELement = document.createElement("img");
      imgELement.classList.add("card");
      imgELement.src = image;
      gallery.appendChild(imgELement);
    });
  }
}
document.addEventListener("DOMContentLoaded", () => loadImages(images));
