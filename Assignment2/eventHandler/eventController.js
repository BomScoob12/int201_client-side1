import todoManagement from '../lib/todoManagement.js'
import { showNumberOfDone, showNumberOfNotDone, showTodoItem } from './UI/TodoList.js'
const manageTodo = todoManagement()
const addTodoDiv = document.getElementById('addTodo')
const statusBtn = document.getElementById('statusBtn')
const addBtn = document.getElementById('addBtn')
const removeBtn = document.getElementById('removeBtn')
addBtn.addEventListener('click', addTodoHandler)
statusBtn.addEventListener('click', notDoneButtonHandler)
removeBtn.addEventListener('click', removeButtonHandler)

function addTodoHandler() {
    const inputValue = addTodoDiv.querySelector('#todoDesc').value
    console.log(inputValue)
    if(!inputValue) {
        showTodoItem(manageTodo.addTodo(inputValue), inputValue)
    }
}

function notDoneButtonHandler() {
    statusBtn.innerHTML = 'done'
    statusBtn.style.backgroundColor = 'green'
    statusBtn.style.color = 'white'
    manageTodo.
}

function removeButtonHandler() {

}