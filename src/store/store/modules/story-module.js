import { storyService } from "../../../services/story.service.local";

export function getActionRemoveStory(storyId) {
  return {
    type: "removeStory",
    storyId,
  };
}

export function getActionUpdateStory(story) {
  return {
    type: "updateStory",
    story,
  };
}

export const storyStore = {
  state: {
    stories: [],
    story: null,
  },
  getters: {
    stories({ stories }) {
      return stories;
    },
    story({ story }) {
      return story;
    },
  },
  mutations: {
    setStories(state, { stories }) {
      state.stories = stories;
    },
    loadStory(state, { story }) {
      state.story = story;
    },
    addStory(state, { story }) {
      state.stories.push(story);
    },
    updateStory(state, { story }) {
      const idx = state.stories.findIndex((c) => c._id === story._id);
      state.stories.splice(idx, 1, story);
    },
    removeStory(state, { storyId }) {
      state.stories = state.stories.filter((story) => story._id !== storyId);
    },
    addStoryComment(state, { storyId, commentToAdd }) {
      const story = state.stories.find((story) => story._id === storyId);
      if (!story.comments) story.comments = [];
      story.comments.push(commentToAdd);
    },
  },
  actions: {
    async loadStories({ commit }, filterBy) {
      if (!filterBy)
        filterBy = {
          userId: "",
        };
      try {
        const stories = await storyService.query(filterBy);
        commit({ type: "setStories", stories });
      } catch (err) {
        console.log("storyStore: Error in loadStorys", err);
        throw err;
      }
    },
    async addStory({ commit }, { story }) {
      try {
        story = await storyService.save(story);
        commit({ type: "addStory", story });
      } catch (err) {
        console.log("storyStore: Error in addStory", err);
        throw err;
      }
    },
    async updateStory(context, { story }) {
      try {
        story = await storyService.save(story);
        context.commit(getActionUpdateStory(story));
        return story;
      } catch (err) {
        console.log("storyStore: Error in updateStory", err);
        throw err;
      }
    },
    async loadStory({ commit }, { storyId }) {
      try {
        const story = await storyService.getById(storyId);
        commit({ type: "loadStory", story });
      } catch (err) {
        console.log("storyStore: Error in loadStory", err);
        throw err;
      }
    },
    async removeStory(context, { storyId }) {
      try {
        await storyService.remove(storyId);
        context.commit(getActionRemoveStory(storyId));
      } catch (err) {
        console.log("storyStore: Error in removeStory", err);
        throw err;
      }
    },
    async addStoryComment({ commit }, { storyId, commentToAdd }) {
      try {
        commentToAdd = await storyService.addStoryComment(
          storyId,
          commentToAdd
        );
        commit("addStoryComment", { storyId, commentToAdd });
      } catch (err) {
        console.log("storyStore: Error in addStoryComment", err);
        throw err;
      }
    },
    async addStoryLike({ commit }, { storyId, userId }) {
      try {
        const story = await storyService.addStoryLike(storyId, userId);

        commit("updateStory", { story });
      } catch (err) {
        throw err;
      }
    },
  },
};
