<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-6 text-center">Todo List</h1>
    <div class="mt-6 flex">
      <form @submit.prevent="addTodo" class="flex gap-2">
        <input v-model="newTodo" type="text" placeholder="Add a new todo" class="input input-bordered w-full max-w-xs mr-2" />
        <button class="btn btn-primary" type="submit" :disabled="addTodoIsPending">Add</button>
      </form>
    </div>
    <ul class="list-disc space-y-3 mt-4">
      <li v-if="isPending" class="flex justify-center items-center gap-2"><span class="loading loading-spinner"></span> Loading...</li>
      <li v-else v-for="item in items" :key="item.id" class="flex justify-between items-center p-2 border rounded">
        <span class="text-lg">{{ item.title }}</span>
        <button @click="removeTodo(item.id)" class="btn btn-outline" :disabled="removeTodoIsPending && removeTodoVariables === item.id">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAddTodoMutation } from "../composables/useAddTodoMutaion";
import { useRemoveTodoMutation } from "../composables/useRemoveTodoMutation";
import { useTodosData } from "../composables/useTodoData";

const { data: items, isPending } = useTodosData();
const { mutate: addTodoMutate, isPending: addTodoIsPending } =
	useAddTodoMutation();
const {
	mutate: removeTodoMutate,
	isPending: removeTodoIsPending,
	variables: removeTodoVariables,
} = useRemoveTodoMutation();

const newTodo = ref("");

const addTodo = () => {
	if (newTodo.value.trim() === "") return;
	addTodoMutate(newTodo.value);
	newTodo.value = "";
};

const removeTodo = (id: string) => {
	removeTodoMutate(id);
};
</script>
