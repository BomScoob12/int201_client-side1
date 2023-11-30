import todoManagement from '../lib/todoManagement.js'
import {
  showNumberOfDone,
  showNumberOfNotDone,
  showTodoItem,
} from '../UI/TodoList.js'
const manageTodo = todoManagement()
const addTodoDiv = document.getElementById('addTodo')
const listTodoElement = document.getElementById('listTodo')

function addTodoHandler() {
  const inputValue = addTodoDiv.querySelector('#todoDesc').value
  console.log(inputValue)
  if (inputValue) {
    const newTodoId = manageTodo.addTodo(inputValue)
    showTodoItem(newTodoId, inputValue)
    const statusBtn = document.getElementById('statusBtn')
    const removeBtn = document.getElementById('removeBtn')
    statusBtn.addEventListener('click', (event) => notDoneButtonHandler(event))
    removeBtn.addEventListener('click', (event) => removeButtonHandler(event))
  } else {
    alert('Invalid input!!!')
  }
}

function notDoneButtonHandler(event) {
   
}

function removeButtonHandler() {}

showNumberOfDone(manageTodo.getNumberOfDone())
showNumberOfNotDone(manageTodo.getNumberOfNotDone())

export { addTodoHandler }
