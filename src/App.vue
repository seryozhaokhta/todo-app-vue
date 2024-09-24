<template>
  <div>
    <AppHeader />
    <AppAddTodo />
    <AppFilters />
    <router-view />
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from './components/AppHeader.vue';
import AppAddTodo from './components/AppAddTodo.vue';
import AppFilters from './components/AppFilters.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style src="./style.css"></style>
