<template>
    <li :class="{ completed: todo.completed }">
        <div v-if="!isEditing" class="view">
            <span @click="toggleComplete">{{ todo.text }}</span>
            <div class="buttons">
                <button @click="enableEditing">{{ $t('editButton') }}</button>
                <button @click="removeTodo">{{ $t('removeButton') }}</button>
            </div>
        </div>
        <div v-else class="edit">
            <input v-model="editedText" @keyup.enter="saveEdit" @blur="saveEdit" class="todo-input" />
            <button @click="saveEdit">{{ $t('saveButton') }}</button>
            <button @click="cancelEdit">{{ $t('cancelButton') }}</button>
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
.completed .view span {
    text-decoration: line-through;
    color: #999;
}

.view {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.buttons {
    display: flex;
    gap: 5px;
}

.edit {
    display: flex;
    align-items: center;
    width: 100%;
}

.todo-input {
    padding: 8px 12px;
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
    padding: 8px 12px;
    font-size: 1em;
}
</style>
