import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');


const markup = galleryItems
    .map(({ preview, original, description }) => {
          
        return `
        <li class = "gallery__item"> 
          <a class = "gallery__link" href="${original}">
         <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
      </a>
      </li>`;  
       
    }).join('');
   
list.insertAdjacentHTML('afterbegin', markup);
// console.log(list);

list.addEventListener('click', fullSize);

function fullSize(event) {
    event.preventDefault();
    // console.log(event);

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    else {
        const originalSize = basicLightbox.create(`
        
	<div class ="modal">
    <img src = ${event.target.dataset.source} width = "800" hieght = "600">
    </div>
`);

        originalSize.show();
        
        window.addEventListener('keydown', closeModal);
        
function closeModal(evt) {
    if (evt.code === 'Escape') {
        originalSize.close()
    }
}
    }
};





