'use strict';
const btnSwitch = document.querySelector('.card__author-btnSwitch');
const cardSocial = document.querySelector('.card__social');

btnSwitch.addEventListener('click', () => {
  btnSwitch.classList.toggle('change');
  cardSocial.classList.toggle('active');
});
