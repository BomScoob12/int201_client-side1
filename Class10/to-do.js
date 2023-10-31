class Todo {
  static nextId = 1;
  constructor(desc) {
    this.id = Todo.nextId++;
    this.desc = desc;
  }

  getTodo() {
    return this;
  }

  getId() {
    return this.id;
  }

  setDesc(newDesc) {
    this.desc = newDesc;
  }
}

function TodoManagement() {
  let todos = [];
  function addTodo(desc) {
    const todo = new Todo(desc);
    todos.push(todo);
  }

  function findTodo(searchId) {
    const returnTodo = todos.find((element) => searchId == element.getId());
    return returnTodo;
  }

  function findIndexTodo(searchId) {
    const returnIndex = todos.findIndex(
      (element) => searchId == element.getId()
    );
    return returnIndex;
  }

  function removeTodo(searchId) {
    const index = findIndexTodo(searchId);
    if (index == -1) return 'Failed';
    else {
      todos.splice(findIndexTodo(searchId), 1);
      return 'success';
    }
  }

  function getTodos() {
    for (const element of todos) {
      console.log(element.getTodo());
    }
  }

  return {
    addTodo,
    findTodo,
    findIndexTodo,
    removeTodo,
    getTodos,
  };
}

const td1 = new Todo('test');
const td2 = new Todo();

console.log(td1.getTodo());
console.log(td1.setDesc('bruhhhh'));
console.log(td1.getTodo());
console.log(td2.getTodo());

const { addTodo, findTodo, findIndexTodo, removeTodo, getTodos } =
  TodoManagement();
addTodo('adding todo in function management');
addTodo('adding todo in function management2');

console.log(findTodo(4));
console.log(findIndexTodo(4));
console.log('-------');
console.log(getTodos());
console.log(removeTodo(4));
console.log(getTodos());
console.log(removeTodo(1));
console.log(getTodos());
console.log('-------');
// todoManagement.getTodos();
