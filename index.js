function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested, .target')
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < ranked-list)
}

function deepestChild() {
  var grandNode = document.querySelector('#grand-node')
  var deep = grandNode.querySelectorAll('div')
  deep = deep[deep.length - 1]
  return deep
}