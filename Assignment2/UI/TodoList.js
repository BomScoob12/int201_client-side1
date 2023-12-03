//handle UI
const listTodoElement = document.getElementById('listTodo')
const summaryTodo = document.getElementById('summaryTodo')

function showTodoItem(id, description, done = false) {
  const newListDiv = document.createElement('div')
  newListDiv.setAttribute('class', 'todoItem')
  newListDiv.setAttribute('id', id)
  newListDiv.innerHTML = `<p>${description}</p>`
  const btn1 = document.createElement('button')
  const btn2 = document.createElement('button')
  if(done){
    btn1.innerHTML = 'Done'
    btn1.setAttribute('class', 'status-done')
  } else {
    btn1.innerText = 'Not Done'
    btn1.setAttribute('class', 'status-notdone')
  }
  btn2.innerText = 'remove'
  btn2.setAttribute('class', 'removeBtn')
  newListDiv.append(btn1)
  newListDiv.append(btn2)
  listTodoElement.appendChild(newListDiv)
}

function removeTodoItem(removeId) {
  const arrayTodos = Array.from(listTodoElement.children)
  for (let temp of arrayTodos) {
    if (temp.getAttribute('id') == removeId) {
      console.log('REMOVED!!!', temp)
      listTodoElement.removeChild(temp)
    }
  }
}

function showNumberOfDone(numberOfDone) {
  const doneMessage = summaryTodo.querySelector('#done')
  doneMessage.innerHTML = `Number of done : ${numberOfDone}`
}

function showNumberOfNotDone(numberOfNotDone) {
  const notDoneMessage = summaryTodo.querySelector('#notDone')
  notDoneMessage.innerHTML = `Number of not done : ${numberOfNotDone}`
}

export { showTodoItem, removeTodoItem, showNumberOfDone, showNumberOfNotDone }
