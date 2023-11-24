
//handle UI
const parent = document.getElementById('listTodo')
const taskList = document.createElement('ul')
const inputValue = document.getElementById('todoDesc')
parent.append(taskList)
console.log(parent)
console.log(taskList)



function addNewList() {
    console.log(inputValue.value)
}
