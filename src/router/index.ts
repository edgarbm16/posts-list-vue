import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import PostsListView from "@/views/PostsListView.vue";
import PostsDetailView from "@/views/PostsDetailView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: to => {return {name: 'PostsList'}}
    },
    {
        path: '/posts',
        name: 'PostsList',
        component: PostsListView
    },
    {
        path: '/posts/:id',
        name: 'PostsDetail',
        component: PostsDetailView
    }
]

const router = createRouter({
    history: createWebHistory (process.env.BASE_URL),
    routes
})

export default router;

