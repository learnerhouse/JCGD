import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({

    routes: [
        {
            path: "/faculty",
            name: "faculty",
            component: (resolve) => {
                require(["../components/faculty.vue"], resolve);
            }
        }
        ,{
            path: "/",
            name: "home",
            component: (resolve) => {
                require(["../components/home.vue"], resolve);
            },
        },{
            path: "/news",
            name: "news",
            component: (resolve) => {
                require(["../components/news.vue"], resolve);
            },
        },{
            path: "/about",
            name: "about",
            component: (resolve) => {
                require(["../components/about.vue"], resolve);
            },
        },{
            path: "/detail/:id",
            name: "detail",
            component: (resolve) => {
                require(["../components/detail.vue"], resolve);
            },
        }
    ]
})
export default router;