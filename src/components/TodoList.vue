<template>
  <div class="container">
    <ul class="list-style-none p-0">
      <todo-list-item
        v-for="(todo, index) of todos"
        v-bind:todo="todo"
        v-bind:key="index"
      />
    </ul>
  </div>
</template>

<script>
  import TodoListItem from '@/components/TodoListItem.vue'

  export default {
    props: {
      todos: {
        type: Array,
        default: []
      }
    },

    components: { TodoListItem },
  }
</script>