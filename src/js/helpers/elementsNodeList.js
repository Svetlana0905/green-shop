const html = document.documentElement
const body = document.body
const list = document.querySelectorAll('.header-navigation__link')
const clearBtnInputSearch = document.querySelector('.serch-form__clear-btn')
const inputSearch = document.querySelector('.serch-form__input')
const formBtn = document.querySelector('.form-btn')
const popUp = document.querySelector('.popup')
const openPopUp = document.querySelector('.login-button')
const closePopUp = document.querySelector('.popup__btn-close')
console.log(popUp)

export {
  html,
  body,
  list,
  clearBtnInputSearch,
  inputSearch,
  formBtn,
  popUp,
  openPopUp,
  closePopUp,
}