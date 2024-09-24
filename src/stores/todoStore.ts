import { defineStore } from 'pinia';
import { Todo } from '../types/Todo';
import { v4 as uuidv4 } from 'uuid';
import { ref, watch } from 'vue';

export const useTodoStore = defineStore('todo', () => {
    const todos = ref<Todo[]>(JSON.parse(localStorage.getItem('todos') || '[]'));

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: uuidv4(),
            text,
            completed: false,
        };
        todos.value.push(newTodo);
    };

    const removeTodo = (id: string) => {
        todos.value = todos.value.filter(todo => todo.id !== id);
    };

    const toggleTodo = (id: string) => {
        const todo = todos.value.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    };

    const updateTodo = (id: string, newText: string) => {
        const todo = todos.value.find(todo => todo.id === id);
        if (todo) {
            todo.text = newText;
        }
    };

    // Новый метод для изменения порядка задач
    const reorderTodos = (newOrder: Todo[]) => {
        todos.value = newOrder;
    };

    watch(todos, (newTodos) => {
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }, { deep: true });

    return { todos, addTodo, removeTodo, toggleTodo, updateTodo, reorderTodos };
});
