import { getAuth } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";

const routes = [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
      meta: {
        authRequired: true,
      },
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach((to, from, next) => {
  const auth = getAuth();

  if (to.matched.some((record) => record.meta.authRequired)) {
    if (auth.currentUser) {
      next();
    } else {
      alert("You've must been logged to access this area");
      router.push("/");
    }
  } else {
    next();
  }
});

export default router;


