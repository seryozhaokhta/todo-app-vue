<template>
    <div>
        <router-link to="/all" class="filter-link">
            <button :class="{ active: currentFilter === 'all' }">{{ $t('all') }}</button>
        </router-link>
        <router-link to="/active" class="filter-link">
            <button :class="{ active: currentFilter === 'active' }">{{ $t('active') }}</button>
        </router-link>
        <router-link to="/completed" class="filter-link">
            <button :class="{ active: currentFilter === 'completed' }">{{ $t('completed') }}</button>
        </router-link>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const currentFilter = computed(() => {
    return route.meta.filter as 'all' | 'active' | 'completed';
});
</script>

<style scoped>
button {
    margin-right: 5px;
    padding: 5px 10px;
}

.active {
    font-weight: bold;
    background-color: #d3d3d3;
}

.filter-link {
    text-decoration: none;
}
</style>
