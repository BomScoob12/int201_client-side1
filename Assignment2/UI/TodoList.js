//handle UI
const listTodoElement = document.getElementById('listTodo')
const taskList = listTodoElement.getElementsByTagName('ul')
function addNewList(todo){
    const newList = document.createElement('li')
    newList.setAttribute('class', todo.done ? 'done' : 'not-done')
    newList.innerHTML = `<p>${todo.description}</p>`
    const btn1 = newList.createElement('button')
    const btn2 = newList.createElement('button')
    btn1.setAttribute('onclick', "addNewList()")
}