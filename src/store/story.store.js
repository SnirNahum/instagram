import { storyService } from "../services/story.service.local";
// import { storyService } from '../services/story.service'

export function getActionRemoveStory(storyId) {
  return {
    type: "removeStory",
    storyId,
  };
}
export function getActionAddStory(story) {
  return {
    type: "addStory",
    story,
  };
}
export function getActionUpdateStory(story) {
  return {
    type: "updateStory",
    story,
  };
}
export function getActionAddStoryMsg(storyId) {
  return {
    type: "addStoryMsg",
    storyId,
    txt: "Stam txt",
  };
}

export const storyStore = {
  state: {
    stories: [],
  },
  getters: {
    stories({ stories }) {
      return stories;
    },
  },
  mutations: {
    setStories(state, { stories }) {
      state.stories = stories;
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
    addStoryMsg(state, { storyId, msg }) {
      const story = state.stories.find((story) => story._id === storyId);
      if (!story.msgs) story.msgs = [];
      story.msgs.push(msg);
    },
  },
  actions: {
    async addStory(context, { story }) {
      try {
        if (this.file) {
          // If a file is selected, upload the image and get the Base64 encoded URL
          const imageUrl = await storyService.uploadImage(this.file);

          // Merge the story object with the image URL
          story = { ...story, imgUrl: imageUrl };
        }

        // Call the save method of the storyService to save the story to localStorage
        story = await storyService.save(story);

        // Commit the mutation to add the story to the store's state
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
    async loadStories(context) {
      try {
        const stories = await storyService.query();
        context.commit({ type: "setStories", stories });
      } catch (err) {
        console.log("storyStore: Error in loadStorys", err);
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
    async addStoryMsg(context, { storyId, txt }) {
      try {
        const msg = await storyService.addStoryMsg(storyId, txt);
        context.commit({ type: "addStoryMsg", storyId, msg });
      } catch (err) {
        console.log("storyStore: Error in addStoryMsg", err);
        throw err;
      }
    },
  },
};
