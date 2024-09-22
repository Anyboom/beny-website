import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware/loadLayout.middleware";
import { AppLayoutsEnum } from "@/layouts/layouts.types";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/admin",
      component: () => import("../views/admin/MainView.vue"),
      name: "admin-index",
      meta: {
        layout: AppLayoutsEnum.admin,
      },
    },
    {
      path: "/",
      component: () => import("../views/main/HomeView.vue"),
      name: "app-index",
    },
  ],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
