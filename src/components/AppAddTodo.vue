<template>
    <div class="add-todo">
        <input v-model="newTodo" :placeholder="$t('addTodoPlaceholder')" @keyup.enter="addNewTodo" class="todo-input" />
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
.add-todo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.todo-input {
    padding: 10px 15px;
    border: 2px solid #ccc;
    border-radius: 4px;
    flex: 1;
    font-size: 1em;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.todo-input:focus {
    border-color: #646cff;
    box-shadow: 0 0 5px rgba(100, 108, 255, 0.5);
    outline: none;
}

button {
    margin-left: 10px;
    padding: 10px 15px;
    font-size: 1em;
}
</style>
