
const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box');
const closeIcon = document.querySelector('.close-icon');
const overlay = document.querySelector('.search-overlay');

searchIcon.addEventListener('click', function() {
  searchBox.classList.add('active');
  overlay.classList.add('active');
});

closeIcon.addEventListener('click', function() {
  searchBox.classList.remove('active');
  overlay.classList.remove('active');
});

const shoppingcart = document.querySelector('.shopping-cart');
const shopbox = document.querySelector('.shop-box');
const closeicon1 = document.querySelector('.close-icon1');
const shoppingoverlay = document.querySelector('.shopping-overlay');

shoppingcart.addEventListener('click', function() {
    shopbox.classList.add('active');
    shoppingoverlay.classList.add('active');
});

closeicon1.addEventListener('click', function() {
    shopbox.classList.remove('active');
    shoppingoverlay.classList.remove('active');
});