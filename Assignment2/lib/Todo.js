class Todo {
    static runningId = 1
    constructor(desc, done = false) {
        this.id = Todo.runningId++
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

module.exports = Todo
