function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested, .target')
}

function increaseRankBy(n) {
  const ranked-list = document.querySelectorAll('.ranked-list li')
}

function deepestChild() {
  var grandNode = document.querySelector('#grand-node')
  var deep = grandNode.querySelectorAll('div')
  deep = deep[deep.length - 1]
  return deep
}