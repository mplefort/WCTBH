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
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName('mySlides');
//   var dots = document.getElementsByClassName('demo');
//   var captionText = document.getElementById('caption');
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex - 1].style.display = 'block';
//   dots[slideIndex - 1].className += ' active';
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// }
