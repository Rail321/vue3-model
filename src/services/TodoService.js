import { todos, addTodo } from '../modules/todo'

class TodoService {

  static get() {
    return todos.value
  }

  static add(todo) {
    todos.value.push(todo)
  }

  static remove(todo) {
    todos.value = todos.value.filter(item => item.id !== todo.id)
  }
}

export default TodoService