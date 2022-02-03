<template>
  <div>
    <todo-form-add/>

    <todo-list
      v-bind:todos="todos"
    />
  </div>
</template>

<script>
  import TodoFormAdd from '@/components/TodoFormAdd.vue'
  import TodoList from '@/components/TodoList.vue'

  import { todos } from '@/modules/todo'

  export default {
    components: { TodoFormAdd, TodoList },

    setup() {
      return { todos }
    }
  }
</script>