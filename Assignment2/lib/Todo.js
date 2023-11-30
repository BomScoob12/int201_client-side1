class Todo {
    static runningId = 1
    constructor(id, desc, done = false) {
        this.id = id
        this.description = desc
        this.done = done
    }

    getTodo(){
        return this
    }

    setDone(isDone){
        this.done = isDone
    }

    setDescription(newDesc){
        this.description = newDesc
    }
}
// module.exports = Todo //! test
export default Todo
