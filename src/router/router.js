import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path : '/index',
        component : () => import('@/views/Index.vue')
    },
    {
        path : '/',
        redirect : '/index'
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;