<template>
  <div class="flex gap-3">
    Todo
    <span class="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
      {{ todoCount }}
    </span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useTodosData } from "../composables/useTodoData";

const { data: items } = useTodosData();

const todoCount = computed(() => (items.value ? items.value.length : 0));
</script>
