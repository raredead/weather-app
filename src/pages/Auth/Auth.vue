<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>

<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field v-model="email" label="email" ></v-text-field>
                    <v-text-field v-model="password" label="password" ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>