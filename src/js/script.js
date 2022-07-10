'use strict';

const btnColor = document.querySelector('.colorsbar');
const colors = document.querySelector('.colors');
const firstColor = document.querySelector('.firstColor');
const secondColor = document.querySelector('.secondColor');
const thirdColor = document.querySelector('.thirdColor');
const fourthColor = document.querySelector('.fourthColor');
const displayColor = document.querySelector('.highlight');
const color = document.querySelectorAll('.color');

btnColor.addEventListener('click', function (e) {
  e.preventDefault();
  colors.classList.toggle('hidden');
});

//  color.forEach(color => )
// firstColor.addEventListener('click', function (e) {
//   e.preventDefault();
//   color.classList.toggle('hidden');
// });
