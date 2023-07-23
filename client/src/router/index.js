import Router from 'vue-router';
import Vue from 'vue'
Vue.use(Router);

const routes = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/admin",
        component: () => import("@/layout/admin.vue"),
        children: [
          {
            path: "user",
            component: () => import("@/views/user/list.vue"),
          },
          {
            path: "applications",
            component: () => import("@/views/applications/list.vue"),
          },          {
            path: "contracts",
            component: () => import("@/views/contracts/list.vue"),
          },          {
            path: "record",
            component: () => import("@/views/record/list.vue"),
          },
          {
            path: "dashboard",
            component: () => import("@/views/dashboard/index.vue"),
          },
        ],
      },
]

const router = new Router({
    routes,
});

router.beforeEach(async (to, from, next) => {
    next()
});

export default router