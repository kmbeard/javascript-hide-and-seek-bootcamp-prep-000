function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested, .target')
}

function deepestChild() {
  var grandNode =  document.querySelector('div, #grand-node:nth-last-child')
}