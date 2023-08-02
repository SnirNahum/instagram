import Vuex from "vuex";

import { userStore } from "./store/modules/user-module.js";
import { storyStore } from "./store/modules/story-module.js";

export const store = Vuex.createStore({
  strict: true,
  modules: {
    userStore,
    storyStore,
  },
  state: {},
  mutations: {},
  actions: {},
});
