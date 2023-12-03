import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/auth',
            name: 'Auth',
            component: () => import('@/pages/Auth/Auth.vue')
        }
    ]
})

export default router