import Vuex from "vuex";

import { userStore } from "./store/modules/user-module.js";
import { storyStore } from "./store/modules/story-module.js";
import { reviewStore } from "./review.store.js";

export const store = Vuex.createStore({
  strict: true,
  modules: {
    userStore,
    storyStore,
    reviewStore,
  },
  state: {},
  mutations: {},
  actions: {},
});
