import { createWebHistory, createRouter } from "vue-router";
import PuzzleGame from "@/components/PuzzleGame.vue";

const routes = [
  {
    path: "/puzzle",
    name: "PuzzleGame",
    component: PuzzleGame,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
