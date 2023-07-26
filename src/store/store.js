import Vuex from "vuex";

import { userStore } from "./user.store.js";
import { storyStore } from "./story.store.js";
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
