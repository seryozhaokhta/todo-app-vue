<template>
    <Draggable v-model="orderedTodos" @end="onDragEnd" tag="ul" :ghost-class="'ghost'" :chosen-class="'chosen'"
        :drag-class="'dragging-over'" item-key="id">
        <template #item="{ element }">
            <AppTodoItem :todo="element" @remove="removeTodo" @toggle="toggleComplete" @update="updateTodoText" />
        </template>
    </Draggable>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useTodoStore } from '../stores/todoStore';
import AppTodoItem from './AppTodoItem.vue';
import { Todo } from '../types/Todo';
import { useRoute } from 'vue-router';
import Draggable from 'vuedraggable';

const todoStore = useTodoStore();
const route = useRoute();

const filteredTodos = computed(() => {
    const filter = route.meta.filter as 'all' | 'active' | 'completed';
    if (filter === 'all') {
        return todoStore.todos;
    } else if (filter === 'active') {
        return todoStore.todos.filter((todo: Todo) => !todo.completed);
    } else {
        return todoStore.todos.filter((todo: Todo) => todo.completed);
    }
});

const orderedTodos = computed({
    get: () => filteredTodos.value,
    set: (newOrder: Todo[]) => {
        todoStore.reorderTodos(newOrder);
    },
});

const removeTodo = (id: string) => {
    todoStore.removeTodo(id);
};

const toggleComplete = (id: string) => {
    todoStore.toggleTodo(id);
};

const updateTodoText = (id: string, newText: string) => {
    todoStore.updateTodo(id, newText);
};

const onDragEnd = (event: any) => {
    console.log('Порядок задач изменён:', event);
};
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.ghost {
    opacity: 0.5;
}

.chosen {
    background-color: #f0f0f0;
}

.dragging-over {
    border: 2px dashed #646cff;
}
</style>
