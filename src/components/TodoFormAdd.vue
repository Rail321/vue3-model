<template>
  <div class="container">
    <form class="d-flex flex-wrap m-n1"
      v-on:submit.prevent.stop="submit"
    >
      <div class="flex-basis-12 p-1">
        <label>
          <p class="m-0">Название</p>
          
          <input class="w-100" type="text"
            v-model="title"
          >
        </label>
      </div>
      
      <div class="flex-basis-12 p-1">
        <label>
          <p class="m-0">Текст</p>
          
          <input class="w-100" type="text"
            v-model="text"
          >
        </label>
      </div>
      
      <div class="flex-basis-6 p-1">
        <label>
          <p class="m-0">Дополнительно</p>
          
          <input class="w-100" type="text"
            v-model="additional"
          >
        </label>
      </div>
      
      <div class="flex-basis-6 p-1 d-flex align-items-end">
        <button class="w-100" type="submit">Добавить</button>
      </div>
    </form>
  </div>
</template>

<script>
  import { title, text, additional, submit } from '@/modules/todoFormAdd'

  export default {
    setup() {
      return { title, text, additional, submit }
    }
  }
</script>