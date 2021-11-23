import Vue from "vue";
import VueRouter from "vue-router";
import signup from "../components/signup";

Vue.use(VueRouter);
let user = [{id: "test", pwd: "test"}];
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/signup',
            name: "Signup",
            component: signup, //컴포넌트 설정하는 위에서 import후 여기서 name만 입력하는 방법 or
            props: {
                user: user,
            }
        },
        {
            path: '/login',
            name: "Login",
            component: () => import('../components/login'), //여기서 import를 시켜주는 방법 나는 이걸 선호.
            props: {
                user: user,
            }
        },
    ]
});
//
// const router = new VueRouter({
//     routes // `routes: routes`의 줄임
// })

export default router;
