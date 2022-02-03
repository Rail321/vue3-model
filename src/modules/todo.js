import { ref } from 'vue'

import TodoService from '@/services/TodoService'

import Todo from '@/models/Todo'

const todos = ref([])

TodoService.add(new Todo({ title: 'Помыться' }))
TodoService.add(new Todo({ title: 'Настроить Алису' }))

const removeTodo = todo => TodoService.remove(todo)

const addTodo = todo => TodoService.add(todo)

export { todos, removeTodo, addTodo }