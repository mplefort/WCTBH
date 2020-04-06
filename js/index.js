import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

const numberImages = 13;

const image_list = document.querySelector('#gallery-items');
let imagesHTML = '';
let i;
for (i = 1; i < numberImages; i++) {
	imagesHTML = imagesHTML.concat(`
  <div class="col-6 col-sm-4 col-md-3 gallery-item p-0 m-0">
  <a class="example-image-link" href="/img/slides/${i}.png" data-lightbox="example-set" data-title="">
    <figure class="effect-apollo my-0">
      <img src="/img/slides/${i}.png" alt="Game Robo" class="img-fluid">
    </figure>
  </a>
  </div>`);
}
console.log(imagesHTML);
image_list.innerHTML = imagesHTML;
