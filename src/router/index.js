import Vue from 'vue'
import VueRouter from "vue-router"
import MainPage from "@/components/MainPage";
import StartPage from "@/components/StartPage";
import Finish from "@/components/Finish"
// import App from "@/App";
Vue.use(VueRouter)

const routes = [
    { path: '/', component: StartPage },
    { path: '/main', component: MainPage },
    { path: '/finish', name: 'finish', component: Finish, props: true }
]
const router = new VueRouter({
    routes // сокращённая запись для `routes: routes`
})
export default router
