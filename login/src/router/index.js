import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Blog from "../components/Blog.vue";

Vue.use(VueRouter);

const route = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/blog",
        component: Blog
    },
];

const router = new VueRouter({
    mode: "history",
    route
});

export default router;
