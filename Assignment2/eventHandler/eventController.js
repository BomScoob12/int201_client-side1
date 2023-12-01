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
    statusBtn.addEventListener('click', notDoneButtonHandler)
    removeBtn.addEventListener('click', removeButtonHandler)
  } else {
    alert('Invalid input!!!')
  }
  showNumberOfDone(manageTodo.getNumberOfDone())
  showNumberOfNotDone(manageTodo.getNumberOfNotDone())
}

function notDoneButtonHandler(event) {
  showNumberOfDone(manageTodo.getNumberOfDone())
  showNumberOfNotDone(manageTodo.getNumberOfNotDone())
}

function removeButtonHandler(event) {
  showNumberOfDone(manageTodo.getNumberOfDone())
  showNumberOfNotDone(manageTodo.getNumberOfNotDone())
}


export { addTodoHandler }
