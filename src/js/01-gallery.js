// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Создание и рендер разметки по массиву данных galleryItems и предоставленному 
// шаблону элемента галереи.
const galleryEl = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`).join("");
galleryEl.insertAdjacentHTML("beforeend", markup)

console.log(galleryItems);

// Библиотека SimpleLightbox 
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox');