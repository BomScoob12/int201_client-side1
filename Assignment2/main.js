import {
  addTodoHandler,
  loadHandler,
  beforeUnloadHandler,
} from './eventHandler/eventController.js'

window.addEventListener('load', loadHandler)
window.addEventListener('onbeforeunload', beforeUnloadHandler)

const addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', addTodoHandler)
