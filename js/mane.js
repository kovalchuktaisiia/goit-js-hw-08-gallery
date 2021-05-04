import galleryList from './gallery-items.js';
console.log(galleryList);
// галерея картинок
const galleryContainerRef = document.querySelector('.js-gallery');
// модалка
const modalContainerRef = document.querySelector('.js-lightbox');
// картинка в модалке
const modalImageRef = document.querySelector('.lightbox__image');
// кнопка закрыть модалку
const closeModalImageRef = document.querySelector('[data-action="close-lightbox"]');


const cardsMarkup = createGalleryCardsMarkup(galleryList);

// создали разметку
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

// + слушатель соб на галареи
galleryContainerRef.addEventListener('click', onGalleryContainerClick);

// по клику на галерее
function onGalleryContainerClick(event) {
console.log(event.target.alt);

// отловили клик на имедж
 const isGaleryImage = event.target.classList.contains('.gallery__image');
  if (!isGaleryImage) {
    return;
  }
  event.preventDefault();

  // + клас опен на модалку
  modalContainerRef.classList.add('is-open');
  // + 
  modalImageRef.setAttribute('src', event.target.getAtribute('${data-source}'));

  closeModalImageRef.addEventListener ('click', onCloseModalImageClick);
  
}

function onCloseModalImageClick () {
  modalContainerRef.classList.remove('is-open');
}