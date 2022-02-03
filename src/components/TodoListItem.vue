<template>
  <li class="d-flex align-items-center mb-1">
    <div class="mr-1">
      <span>{{ $.vnode.key + 1 }}.</span>
    </div>

    <p class="flex-grow-1 m-0">
      <span>{{ todo.title }}</span>
    </p>

    <button type="button"
      v-on:click="removeTodo(todo)"
    >
      <span>X</span>
    </button>
  </li>
</template>

<script>
  import { removeTodo } from '@/modules/todo'

  export default {
    props: {
      todo: {
        type: Object,
        required: true
      },
    },

    setup() {
      return { removeTodo }
    }
  }
</script>