import { createRouter, createWebHashHistory } from "vue-router";

import Feed from "./views/Feed.vue";
import InstagramLoginSignup from "./views/InstagramLoginSignup.vue";
import Reels from "./views/Reels.vue";
import Messages from "./views/Messages.vue";
import Create from "./views/StoryCreate.vue";
import Profile from "./views/Profile.vue";
import Explore from "./views/Explore.vue";

import CommentModalView from "./views/CommentModalView.vue";

const routes = [
  {
    path: "/",
    name: "Feed",
    component: Feed,
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
    path: "/storyCreate",
    name: "StoryCreate",
    component: Create,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/LoginSignup",
    name: "LoginSignup",
    component: InstagramLoginSignup,
  },
];

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // base: process.env.BASE_URL,
});
