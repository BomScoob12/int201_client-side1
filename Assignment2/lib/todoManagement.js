import Todo from './Todo.js'
// const Todo = require ('./Todo.js') //!test
function todoManagement() {
  let todos = new Array()

  function addTodo(desc) {
    let newTodo = new Todo(Todo.runningId++, desc)
    todos.push(newTodo)
    return newTodo.id
  }

  function findTodo(searchId) {
    const returnTodo = todos.find((element) => searchId === element.id)
    return returnTodo
  }

  function findIndexTodo(searchId) {
    const returnIndex = todos.findIndex(
      (element) => searchId === element.id
    )
    return returnIndex
  }

  function removeTodo(searchId) {
    const index = findIndexTodo(searchId)
    if (index === -1) return 'Failed'
    else {
      todos.splice(findIndexTodo(searchId), 1)
      return 'Success'
    }
  }

  function setItemToDone(doneId) {
    const indexOfTodo = findIndexTodo(doneId)
    if(todos[indexOfTodo] == -1) {
      console.error('Can not find todo!')
    } else {
      todos[indexOfTodo].setDone(true)
      console.log(todos[indexOfTodo])
    }
  }

  function getTodos() {
    return todos
  }

  function getNumberOfDone(){
    return todos.filter((todo) => todo.done === true).length
  }

  function getNumberOfNotDone(){
    return todos.filter((todo) => todo.done === false).length
  }

  function clearTodo(){
    todos = new Array()
  }
  return {
    addTodo,
    findTodo,
    findIndexTodo,
    removeTodo,
    setItemToDone,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    clearTodo
  }
}
// module.exports = {todoManagement} //! test
export default todoManagement
