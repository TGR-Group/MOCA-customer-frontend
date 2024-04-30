import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/introduction", component: () => import("../components/introduction.vue") },
    { path: "/", component: () => import("../components/dashboard.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;