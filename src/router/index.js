import { createRouter, createWebHistory } from 'vue-router'
import Hej from "../views/Hej.vue";
import Galleri from "../views/Galleri.vue";
import Cv from "../views/Cv.vue";
import Aktuellt from "../views/Aktuellt.vue";
import Video from "../views/Video.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "hej",
      component: Hej
    },

    {
      path: "/cv",
      name: "cv",
      component: Cv
    },
    {
      path: "/aktuellt",
      name: "aktuellt",
      component: Aktuellt
    },
    {
      path: "/galleri",
      name: "galleri",
      component: Galleri
    },
    {
      path: "/video/:videoType",
      name: "video",
      component: Video
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
