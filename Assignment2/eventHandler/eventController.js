import todoManagement from '../lib/todoManagement.js'
import {
  showNumberOfDone,
  showNumberOfNotDone,
  showTodoItem,
  removeTodoItem,
} from '../UI/TodoList.js'
const manageTodo = todoManagement()
const addTodoDiv = document.getElementById('addTodo')

function addTodoHandler() {
  const inputValue = addTodoDiv.querySelector('#todoDesc').value
  if (inputValue) {
    const newTodoId = manageTodo.addTodo(inputValue)
    showTodoItem(newTodoId, inputValue)
    //* searching div by using id
    const todoItem = document.getElementById(newTodoId)
    const statusBtn = todoItem.getElementsByTagName('button')[0]
    const removeBtn = todoItem.getElementsByTagName('button')[1]
    // console.log(todoItem)
    // console.log(statusBtn)
    // console.log(removeBtn)
    statusBtn.addEventListener('click', notDoneButtonHandler)
    removeBtn.addEventListener('click', removeButtonHandler)
  } else {
    alert('Invalid input!!!')
  }
  updateStatus()
}

function notDoneButtonHandler(event) {
  const parentElement = event.target.parentElement
  console.log(parentElement)
  const todoId = parentElement.getAttribute('id')
  //! becareful the type of data that return
  manageTodo.setItemToDone(Number(todoId))
  updateStatus()
}

function removeButtonHandler(event) {
  const parentElement = event.target.parentElement
  console.log(parentElement)
  const todoId = parentElement.getAttribute('id')
  //require string or num
  removeTodoItem(todoId)
  //require num
  manageTodo.removeTodo(Number(todoId))
  updateStatus()
}

function updateStatus(){
  showNumberOfDone(manageTodo.getNumberOfDone())
  showNumberOfNotDone(manageTodo.getNumberOfNotDone())
}

// handle client
function loadHandler(){
  const todos = localStorage.getItem('userTodos')
  console.log(todos)
  console.log(JSON.parse(todos))
}

function beforeUnloadHandler(event){
  event.preventDefault()
  localStorage.setItem('userTodos', JSON.stringify(manageTodo.getTodos()))
  manageTodo.clearTodo()
}

export { addTodoHandler,
loadHandler,
beforeUnloadHandler }
