import { createRouter, createWebHashHistory } from "vue-router";

// import Home from "./views/Home.vue";
// import Chat from "./views/Chat.vue";
// import CarIndex from "./views/CarIndex.vue";
// import ReviewIndex from "./views/ReviewIndex.vue";
// import LoginSignup from "./views/LoginSignup.vue";
// import UserDetails from "./views/UserDetails.vue";

import Feed from "./views/Feed.vue";
import InstagramLoginSignup from "./views/InstagramLoginSignup.vue";
import Reels from "./views/Reels.vue";
import Messages from "./views/Messages.vue";
import Create from "./views/StoryCreate.vue";
import Profile from "./views/Profile.vue";
import Explore from "./views/Explore.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/car",
  //   name: "CarIndex",
  //   component: CarIndex,
  // },
  // {
  //   path: "/review",
  //   name: "ReviewIndex",
  //   component: ReviewIndex,
  // },
  // {
  //   path: "/chat",
  //   name: "Chat",
  //   component: Chat,
  // },
  // {
  //   path: "/login",
  //   name: "LoginSignup",
  //   component: LoginSignup,
  // },
  // {
  //   path: "/user/:id",
  //   name: "UserDetails",
  //   component: UserDetails,
  // },

  {
    path: "/",
    name: "Feed",
    component: Feed,
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
