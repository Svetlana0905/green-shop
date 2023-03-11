import { html, list, clearBtnInputSearch, inputSearch } from './../helpers/elementsNodeList'

// logger (Full Logging System)
function FLS(message) {
  setTimeout(() => (window.FLS ? console.log(message) : null), 0)
}

// Проверка браузера на поддержку .webp изображений
function isWebp() {
  // Проверка поддержки webp
  const testWebp = (callback) => {
    const webP = new Image()

    webP.onload = webP.onerror = () => callback(webP.height === 2)
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebp((support) => {
    const className = support ? 'webp' : 'no-webp'
    html.classList.add(className)
    // FLS(support ? 'webp поддерживается' : 'webp не поддерживается')
  })
}

function activeLink() {
  list.forEach(item => {
    item.classList.remove('active')
    if (item.pathname === window.location.pathname) {
      item.classList.add('active')
    }
  })
}
function showClearBtn() {
  inputSearch.addEventListener('input', function (e) {
    e.target.value ? clearBtnInputSearch.classList.add('active') : clearBtnInputSearch.classList.remove('active')
  })
}

function clearSearchInput() {
  clearBtnInputSearch.addEventListener('click', function (e) {
    e.preventDefault()
    inputSearch.value = ''
    clearBtnInputSearch.classList.remove('active')
  })
}

export {
  FLS,
  isWebp,
  activeLink,
  clearSearchInput,
  showClearBtn
}
