import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        header: 'Todo List',
        addTodoPlaceholder: 'Add a new task',
        addButton: 'Add',
        removeButton: 'Remove',
        all: 'All',
        active: 'Active',
        completed: 'Completed',
        footer: '© 2024 Your ToDo App',
        clearCompleted: 'Clear Completed',
        toggleLanguage: 'Switch to Russian',
        totalTasks: 'Total Tasks',
        completedTasks: 'Completed Tasks',
        completion: 'Completion',
        editButton: 'Edit',
        saveButton: 'Save',
        cancelButton: 'Cancel',
    },
    ru: {
        header: 'Список Задач',
        addTodoPlaceholder: 'Добавить новую задачу',
        addButton: 'Добавить',
        removeButton: 'Удалить',
        all: 'Все',
        active: 'Активные',
        completed: 'Завершённые',
        footer: '© 2024 Ваше приложение для заметок',
        clearCompleted: 'Очистить завершённые',
        toggleLanguage: 'Переключиться на английский',
        totalTasks: 'Всего Задач',
        completedTasks: 'Завершённых Задач',
        completion: 'Выполнено',
        editButton: 'Редактировать',
        saveButton: 'Сохранить',
        cancelButton: 'Отмена',
    },
};

const i18n = createI18n({
    locale: 'en', // начальный язык
    fallbackLocale: 'en',
    messages,
});

export default i18n;
