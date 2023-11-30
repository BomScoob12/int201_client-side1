import { addTodoHandler } from "./eventHandler/eventController.js"

const addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', addTodoHandler)
