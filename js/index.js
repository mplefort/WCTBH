import jQuery from 'jquery';
window.$ = window.jQuery = jQuery; // workaround for https://github.com/parcel-bundler/parcel/issues/333
import popper from 'popper.js';

const numberImages = 13;
const image_list = document.querySelector('#gallery-items');
let imagesHTML = '';
let i;
for (i = 1; i < numberImages; i++) {
  imagesHTML = imagesHTML.concat(`
  <div class="col-6 col-sm-4 col-md-3 gallery-item p-0 m-0">
    <figure class="my-0">
      <img src="/img/slides/${i}.png" alt="Horseback rides" class="img-fluid hover-shadow" onclick="openModal();currentSlide(${1})">
    </figure>
  </div>`);
}
image_list.innerHTML = imagesHTML;

// Modal functions
// Open the Modal
window.openModal = function openModal() {
  console.log(document.getElementById('myModal'));
  document.getElementById('myModal').style.display = 'block';
};

// Close the Modal
window.closeModal = function closeModal() {
  document.getElementById('myModal').style.display = 'none';
};

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
window.plusSlides = function plusSlides(n) {
  showSlides((slideIndex += n));
};

// Thumbnail image controls
window.currentSlide = function currentSlide(n) {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  console.log(slides);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  // hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
