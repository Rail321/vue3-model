class Todo {

  constructor(payload) {
    this.id = Date.now(),
    this.title = payload.title,
    this.text = payload.text,
    this.additional = payload.additional
  }
}

export default Todo