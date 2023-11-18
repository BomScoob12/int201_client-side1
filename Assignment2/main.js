
//handle UI
const parent = document.getElementById('listTodo')
const taskList = document.createElement('ul')
parent.append(taskList)
console.log(parent)
console.log(taskList)

const newList = document.createElement('li')
newList.setAttribute('class', 'done')
newList.innerHTML = '<p>testTodoDesc</p>'
const btn1 = document.createElement('button')
const btn2 = document.createElement('button')
btn1.innerText = "Done"
btn2.innerText = "remove"
btn1.setAttribute('onclick', 'setDone()')
btn2.setAttribute('onclick', "deleteTaskList()")
newList.append(btn1)
newList.append(btn2)
taskList.append(newList)
