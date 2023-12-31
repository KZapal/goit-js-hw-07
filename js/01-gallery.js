import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(`.gallery`);

for (const item of galleryItems) {
  const galleryItem = document.createElement(`div`);
  galleryItem.classList.add(`gallery__item`);

  const galleryLink = document.createElement(`a`);
  galleryLink.classList.add(`gallery__link`);
  galleryLink.href = `${item.original}`;
  galleryLink.target = `_self`;

  const galleryImage = document.createElement(`img`);
  galleryImage.classList.add(`gallery__image`);
  galleryImage.src = `${item.preview}`;
  galleryImage.dataset.source = `${item.original}`;
  galleryImage.alt = `${item.description}`;

  gallery.append(galleryItem);
  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
}

let instance;

gallery.addEventListener(`click`, (event) => {
  event.preventDefault();

  if (event.target.nodeName !== `IMG`) {
    return;
  }

  const content = document.createElement(`div`);
  const originalImage = document.createElement(`img`);
  originalImage.src = event.target.getAttribute(`data-source`);
  content.append(originalImage);

  instance = basicLightbox.create(content);
  instance.show();
});

gallery.addEventListener(`keydown`, (event) => {
  if (event.key === `Escape`) {
    instance.close();
  }
});
