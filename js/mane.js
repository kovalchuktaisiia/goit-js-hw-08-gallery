import galleryList from './gallery-items.js';
console.log(galleryList);

const galleryContainerRef = document.querySelector('.js-gallery');
const modalContainerRef = document.querySelector('.js-lightbox');
const modalImageRef = document.querySelector('.lightbox__image');

const cardsMarkup = createGalleryCardsMarkup(galleryList);

galleryContainerRef.addEventListener('click', onGalleryClick);

function createGalleryCardsMarkup(galleryList) {
  return galleryList
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a
        class="gallery__link"
        href="${preview}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
    })
    .join('');
};

galleryContainerRef.insertAdjacentHTML('beforeend', cardsMarkup);
console.log(galleryContainerRef);

function onGalleryClick(event) {
console.log(event.target.alt);

 const isGaleryImage = event.target.classList.contains('.gallery__image');
  if (!isGaleryImage) {
    return;
  }
  event.preventDefault();

  modalContainerRef.classList.add('is-open');
  modalImageRef.setAttribute('src', event.target.getAttribute('data-source'));
  
}