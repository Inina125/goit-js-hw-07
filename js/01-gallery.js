import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

let elements = "";
for (const item of galleryItems) {
  elements += `<div class="gallery__item">
      <a class="gallery__link" onclick="event.preventDefault()" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </div>`;
}
const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("afterbegin", elements);
gallery.addEventListener("click", clickHandler);

function clickHandler(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const bigImage = e.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${bigImage}" width="800" height="600">`
  );
  instance.show();
}
