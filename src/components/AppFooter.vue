<template>
    <footer>
        <p>{{ $t('footer') }}</p>
        <div class="stats">
            <div class="stat-item">
                <span class="label">{{ $t('totalTasks') }}:</span>
                <span class="value">{{ totalTasks }}</span>
            </div>
            <div class="stat-item">
                <span class="label">{{ $t('completedTasks') }}:</span>
                <span class="value">{{ completedTasks }}</span>
            </div>
            <div class="stat-item">
                <span class="label">{{ $t('completion') }}:</span>
                <span class="value">{{ completionPercentage }}%</span>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useTodoStore } from '../stores/todoStore';

const todoStore = useTodoStore();

const totalTasks = computed(() => todoStore.todos.length);
const completedTasks = computed(() => todoStore.todos.filter(todo => todo.completed).length);
const completionPercentage = computed(() => {
    if (totalTasks.value === 0) return 0;
    return Math.round((completedTasks.value / totalTasks.value) * 100);
});
</script>

<style scoped>
footer {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    color: #999;
}

.stats {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;
}

.stat-item {
    display: flex;
    align-items: center;
}

.label {
    font-weight: bold;
    margin-right: 5px;
}

.value {
    color: #333;
}

@media (max-width: 600px) {
    .stats {
        flex-direction: column;
        gap: 10px;
    }
}
</style>
