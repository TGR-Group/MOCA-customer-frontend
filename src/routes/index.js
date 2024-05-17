import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/introduction', component: () => import('../components/introduction.vue') },
    { path: '/', component: () => import('../components/dashboard.vue') },
    { path: '/introduction/detail/:StoreID', component: () => import('../components/StoreDetail.vue') },
    { path: '/TimeTable', component: () => import('../components/TimeTable.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('../components/NotFound.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return { top: 0 }
    }
})

export default router;