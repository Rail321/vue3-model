import { ref } from 'vue'

import { addTodo } from '@/modules/todo'

import TodoService from '@/services/TodoService'

import Todo from '@/models/Todo'

const title = ref('Название')
const text = ref('Текст')
const additional = ref('Дополнительно')

const submit = () => {
  TodoService.add(new Todo({
    title: title.value,
    text: text.value,
    additional: additional.value
  }))
}

export { title, text, additional, submit }