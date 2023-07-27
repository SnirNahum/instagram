import { storyService } from "../services/story.service.local";
// import { storyService } from '../services/story.service'

export function getActionRemoveStory(storyId) {
  return {
    type: "removeStory",
    storyId,
  };
}
// export function getActionAddStory(story) {
//   return {
//     type: "addStory",
//     story,
//   };
// }
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
    addStoryComment(state, { storyId, txt }) {
      const story = state.stories.find((story) => story._id === storyId);
      if (!story.comments) story.comments = [];
      story.comments.push(txt);
    },
  },
  actions: {
    async loadStories(context) {
      try {
        const stories = await storyService.query();
        context.commit({ type: "setStories", stories });
      } catch (err) {
        console.log("storyStore: Error in loadStorys", err);
        throw err;
      }
    },
    async addStory(context, { story }) {
      try {
        if (this.file) {
          const imageUrl = await storyService.uploadImage(this.file);
          story = { ...story, imgUrl: imageUrl };
        }
        story = await storyService.save(story);
        context.commit({ type: "addStory", story });
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
        const comment = await storyService.addStoryComment(
          storyId,
          commentToAdd
        );
        commit({ type: "addStoryComment", storyId, txt: comment });
      } catch (err) {
        console.log("storyStore: Error in addStoryComment", err);
        throw err;
      }
    },
  },
};
