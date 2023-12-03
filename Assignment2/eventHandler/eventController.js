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
  const newTodoDesc = addTodoDiv.querySelector('#todoDesc').value
  if (newTodoDesc.length > 0) {
    const newTodoId = manageTodo.addTodo(newTodoDesc)
    showTodoItem(newTodoId, newTodoDesc)
    addEventButton(newTodoId)
  } else {
    alert('Invalid input!!!')
  }
  updateStatus()
}

function addEventButton(todoId) {
  //* searching div by using id
  const todoItem = document.getElementById(todoId)
  if (todoItem === null) {
    console.log('can not find todo item.')
  } else {
    const statusBtn = todoItem.getElementsByTagName('button')[0]
    const removeBtn = todoItem.getElementsByTagName('button')[1]
    statusBtn.addEventListener('click', notDoneButtonHandler)
    removeBtn.addEventListener('click', removeButtonHandler)
    console.log(todoId, 'Button event added.')
  }
}

function notDoneButtonHandler(event) {
  const parentElement = event.target.parentElement
  const todoId = parentElement.getAttribute('id')
  //! becareful the type of data that return
  console.log('Type of TodoId:', typeof todoId, 'value of todoId :', todoId)
  manageTodo.setItemToDone(Number(todoId))
  const target = event.target
  target.innerHTML = 'Done'
  target.setAttribute('class', 'status-done')
  updateStatus()
}

function removeButtonHandler(event) {
  const parentElement = event.target.parentElement
  const todoId = parentElement.getAttribute('id')
  //require string or num
  removeTodoItem(Number(todoId))
  //require num
  manageTodo.removeTodo(Number(todoId))
  updateStatus()
}

function updateStatus() {
  showNumberOfDone(manageTodo.getNumberOfDone())
  showNumberOfNotDone(manageTodo.getNumberOfNotDone())
}

// handle client
function loadHandler() {
  const todoStorage = JSON.parse(localStorage.getItem('userTodos'))
  if (
    todoStorage.length !== 0 ||
    todoStorage !== null ||
    todoStorage !== undefined
  ) {
    manageTodo.loadTodos(todoStorage)
    const todos = manageTodo.getTodos()
    console.log(todos)
    todos.forEach((todo) => {
      showTodoItem(todo.id, todo.description, todo.done)
      addEventButton(todo.id)
    })
  }
  updateStatus()
}

function beforeUnloadHandler(event) {
  event.preventDefault()
  localStorage.setItem('userTodos', JSON.stringify(manageTodo.getTodos()))
  manageTodo.clearTodo()
}

export { addTodoHandler, loadHandler, beforeUnloadHandler }
