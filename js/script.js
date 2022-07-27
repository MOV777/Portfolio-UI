const btn = document.querySelector('.nav__toggle');
let navigation = document.querySelector('.nav');
let nav_list = document.querySelector('.nav__list');
btn.onclick = function () {
   navigation.classList.toggle('nav--light');
   nav_list.classList.toggle('nav__list--opened');
}