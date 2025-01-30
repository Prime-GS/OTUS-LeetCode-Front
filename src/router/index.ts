import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/authStores";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/explore",
      name: "Задания",
      component: () => import("../views/TasksView.vue"),
    },
    // {
    //   path: "/problems",
    //   name: "Проблемы",
    //   component: () => import("../views/HomeView.vue"),
    // },
    // {
    //   path: "/discuss",
    //   name: "Обсуждения",
    //   component: () => import("../views/HomeView.vue"),
    // },
    {
      path: "/admin",
      name: "Обсуждения",
      beforeEnter: () => {
        const store = useAuthStore();
        if (!store.isLoggendIn && !store.hasAnyRole(["admin"])) return false;
      },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      redirect: "/auth/login",
      children: [
        { path: "login", component: () => import("../views/auth/LoginView.vue") },
        { path: "registration", component: () => import("../views/auth/RegistrationView.vue") },
      ],
    },
  ],
});

export default router;
