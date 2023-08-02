import { createRouter, createWebHashHistory } from "vue-router";

import Login from "./views/Login.vue";
import Feed from "./views/Feed.vue";
import Reels from "./views/Reels.vue";
import Messages from "./views/Messages.vue";
import Create from "./views/StoryCreate.vue";
import Profile from "./views/Profile.vue";
import Explore from "./views/Explore.vue";

import CommentModalView from "./views/CommentModalView.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Feed",
    component: Feed,
  },
  {
    path: "/storyCreate",
    name: "storyCreate",
    component: Create,
  },
  {
    path: "/:storyId",
    name: "CommentModalView",
    component: CommentModalView,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/reels",
    name: "Reels",
    component: Reels,
  },
  {
    path: "/messages",
    name: "Messages",
    component: Messages,
  },
  {
    path: "/profile/:userId",
    name: "Profile",
    component: Profile,
  },
];

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // base: process.env.BASE_URL,
});
