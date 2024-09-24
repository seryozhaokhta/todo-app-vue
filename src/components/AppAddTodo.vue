<template>
    <div>
        <input v-model="newTodo" :placeholder="$t('addTodoPlaceholder')" @keyup.enter="addNewTodo" />
        <button @click="addNewTodo">{{ $t('addButton') }}</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todoStore';

const newTodo = ref<string>('');
const todoStore = useTodoStore();

const addNewTodo = () => {
    const trimmed = newTodo.value.trim();
    if (trimmed) {
        todoStore.addTodo(trimmed);
        newTodo.value = '';
    }
};
</script>

<style scoped>
input {
    padding: 5px;
    margin-right: 5px;
}

button {
    padding: 5px 10px;
}
</style>
