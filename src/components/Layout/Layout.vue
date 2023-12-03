<script setup lang="ts">
import { useTheme } from 'vuetify';
import { THEME_KEY } from '@/utils/constants'
const theme = useTheme()

const toggleTheme = () => {
    const updateTheme = theme.global.current.value.dark ? 'light' : 'dark'
    localStorage.setItem(THEME_KEY, updateTheme)
    theme.global.name.value = updateTheme
}
</script>

<template>
    <v-layout class="rounded rounded-md">
        <v-app-bar class="spacing-playground px-6" title="Weather app">
            <v-icon @click="toggleTheme" icon="mdi-weather-sunny" />
        </v-app-bar>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <slot />
        </v-main>
    </v-layout>
</template>