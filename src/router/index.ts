import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '@/pages/Home/HomeApp.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: HomeApp,
            component: HomeApp
        }
    ]
})

export default router