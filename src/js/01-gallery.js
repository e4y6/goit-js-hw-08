import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const markupGallery = composeMarkup(galleryItems);

galleryRef.innerHTML = markupGallery;

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  overlayOpacity: 0.5,
  enableKeyboard: true,
  navText: ['←', '→'],
});

function composeMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt title="${description}" />
      </a>`;
    })
    .join('');
}
