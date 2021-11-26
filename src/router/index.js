import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home/Home'
import Kanban from '@/views/kanban/Kanban'

Vue.use(VueRouter)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'kanban',
        path: '/kanban',
        component: Kanban
    }
]

const router = new VueRouter({ mode: 'history', routes })

export default router;