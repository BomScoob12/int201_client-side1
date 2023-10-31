class Todo {
    static nextID = 0;
    constructor(desc) {
        this.id = ++Todo.nextID;
        this.description = desc;
    }

    getTodo = function () {
        return { id: this.id, description: this.description }
    }

    setDescription = function (newDescription) {
        this.description = newDescription
    }
}


function TodoManagement() {
    let todos = []

    function addTodo(desc) {
        const newTodo = new Todo(desc)
        todos.push(newTodo)
        return todos.length
    }

    function findTodo(searchId) {
        return todos.find(todo => todo.id === searchId) 
        //const todo;  return todo ? todo.getTodo() : 'Not Found'
    }

    function findIndexTodo(searchId) {
        const todo = todos.findIndex(todo => todo.id === searchId)
        return todo
    }

    function removeTodo(searchId) {
        const index = findIndexTodo(searchId)
        if (index !== -1) {
            todos.splice(index, 1)
        }
    }

    function getTodos() {
        return todos
    }

    return {
        addTodo,
        findTodo,
        findIndexTodo,
        removeTodo,
        getTodos
    }
}
const t1 = new Todo('mk')
console.log(Todo.prototype.isPrototypeOf(t1));
const tm = TodoManagement()
console.log(tm.addTodo('Fame'))
console.log(tm.addTodo('Bom'))
console.log(tm.addTodo('Jinn'))
console.log(tm.addTodo('Fame'))
console.log(tm.findTodo(2))
console.log(tm.findTodo(6))
console.log(tm.findIndexTodo(2))
console.log(tm.findIndexTodo(8))
console.log(tm.getTodos());
tm.removeTodo(1)
console.log(tm.getTodos());
