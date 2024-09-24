<template>
    <header>
        <h1>{{ $t('header') }}</h1>
        <button @click="toggleLanguage">{{ toggleButtonText }}</button>
    </header>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();

const toggleLanguage = () => {
    locale.value = locale.value === 'en' ? 'ru' : 'en';
};

const toggleButtonText = computed(() => {
    return t('toggleLanguage');
});
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

button {
    padding: 5px 10px;
    cursor: pointer;
}
</style>
