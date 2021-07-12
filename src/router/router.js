import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import Names from "@/pages/Names";
import Values from "@/pages/Values";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/names',
        component: Names
    },
    {
        path: '/values',
        component: Values
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
