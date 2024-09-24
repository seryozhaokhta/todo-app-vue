<template>
    <li :class="['todo-item', { 'todo-item--completed': todo.completed }]">
        <div v-if="!isEditing" class="todo-item__view">
            <span @click="toggleComplete" class="todo-item__text">{{ todo.text }}</span>
            <div class="todo-item__buttons">
                <button class="todo-item__button" @click="enableEditing">{{ $t('editButton') }}</button>
                <button class="todo-item__button" @click="removeTodo">{{ $t('removeButton') }}</button>
            </div>
        </div>
        <div v-else class="todo-item__edit">
            <input v-model="editedText" @keyup.enter="saveEdit" @blur="saveEdit" class="todo-item__input" />
            <button class="todo-item__button" @click="saveEdit">{{ $t('saveButton') }}</button>
            <button class="todo-item__button" @click="cancelEdit">{{ $t('cancelButton') }}</button>
        </div>
    </li>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Todo } from '../types/Todo';

const props = defineProps<{
    todo: Todo;
}>();

const emit = defineEmits<{
    (e: 'remove', id: string): void;
    (e: 'toggle', id: string): void;
    (e: 'update', id: string, newText: string): void;
}>();

const isEditing = ref(false);
const editedText = ref(props.todo.text);

const removeTodo = () => {
    emit('remove', props.todo.id);
};

const toggleComplete = () => {
    emit('toggle', props.todo.id);
};

const enableEditing = () => {
    isEditing.value = true;
};

const saveEdit = () => {
    const trimmed = editedText.value.trim();
    if (trimmed && trimmed !== props.todo.text) {
        emit('update', props.todo.id, trimmed);
    }
    isEditing.value = false;
};

const cancelEdit = () => {
    editedText.value = props.todo.text;
    isEditing.value = false;
};
</script>

<style scoped>
.todo-item {
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    flex-direction: column;
}

.todo-item--completed .todo-item__text {
    text-decoration: line-through;
    color: #999;
}

.todo-item__view {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.todo-item__text {
    cursor: pointer;
}

.todo-item__buttons {
    display: flex;
    gap: 5px;
}

.todo-item__button {
    padding: 5px 10px;
    font-size: 0.9em;
    border: none;
    border-radius: 4px;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s;
}

.todo-item__button:hover {
    background-color: #e0e0e0;
}

.todo-item__edit {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 10px;
}

.todo-item__input {
    padding: 8px 12px;
    border: 2px solid #ccc;
    border-radius: 4px;
    flex: 1;
    font-size: 1em;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.todo-item__input:focus {
    border-color: #646cff;
    box-shadow: 0 0 5px rgba(100, 108, 255, 0.5);
    outline: none;
}
</style>
