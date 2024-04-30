import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/introduction", component: () => import("../components/introduction.vue") },
    { path: "/", component: () => import("../components/dashboard.vue") },
    { path: "/introduction/detail/:StoreID", component: () => import("../components/StoreDetail.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;