<template>
  <Header>
    <TodoCount v-if="shouldRerenderTodoCount"/>
  </Header>
  <main>
    <div class="p-4 flex justify-end gap-2">
      <button class="btn btn-outline btn-info btn-sm" type="button" @click="reRenderTodo">Refresh Todo</button>
      <button class="btn btn-outline btn-info btn-sm" type="button" @click="reRenderAll">Refresh All</button>
    </div>
    <TodoItems v-if="shouldRerenderTodo"/>
  </main>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import TodoItems from "./components/TodoItems.vue";
import TodoCount from "./components/TodoCount.vue";
import { ref } from "vue";

const shouldRerenderTodo = ref(true);
const shouldRerenderTodoCount = ref(true);

const reRenderTodo = async () => {
  shouldRerenderTodo.value = false;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  shouldRerenderTodo.value = true;
}
const reRenderAll = async () => {
  shouldRerenderTodo.value = false;
  shouldRerenderTodoCount.value = false;
  await new Promise((resolve) => setTimeout(resolve, 3000));
  shouldRerenderTodo.value = true;
  shouldRerenderTodoCount.value = true;
}
</script>
