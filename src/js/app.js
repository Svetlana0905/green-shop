import { isWebp, activeLink, clearSearchInput, showClearBtn, openPopUpActions, closePopUpActions } from './modules';
import { formBtn } from './helpers/elementsNodeList'
import Swiper, { Pagination, EffectFlip } from 'swiper';
import noUiSlider from 'nouislider'

window['FLS'] = true

isWebp()
activeLink()
clearSearchInput()
showClearBtn()
openPopUpActions();
closePopUpActions()

formBtn.addEventListener('click', function (e) {
   e.preventDefault()
})

const swiperFirstScreen = new Swiper(".slider-first", {
   modules: [Pagination, EffectFlip],
   effect: 'flip',
   loop: true,
   pagination: {
      el: '.slider-first__pagination',
      type: 'bullets',
      clickable: true,
   },
});

const rangeSlider = document.getElementById('slider');

if (rangeSlider) {
   noUiSlider.create(slider, {
      start: [39, 1230],
      connect: true,
      range: {
         'min': 39,
         'max': 1230
      }
   });
}
const span0 = document.querySelector('.span-price-0');
const span1 = document.querySelector('.span-price-1');
const spanes = [span0, span1];

rangeSlider.noUiSlider.on('update', function (values, handle) {
   spanes[handle].innerHTML = '$' + Math.round(values[handle]);
});

