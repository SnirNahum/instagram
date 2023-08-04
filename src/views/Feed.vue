<template>
  <div class="feed-container">
    <StoryList
      :stories="stories"
      @commentToAdd="commentToAdd"
      @addStoryLike="addStoryLike"
    />
  </div>
</template>

<script>
import StoryList from "../cmps/StoryList.vue";
import StoryCreate from "./StoryCreate.vue";

export default {
  computed: {
    stories() {
      return this.$store.getters.stories;
    },
  },
  created() {
    this.$store.dispatch({ type: "loadStories" });
  },
  methods: {
    async commentToAdd(storyId, commentToAdd) {
      try {
        await this.$store.dispatch("addStoryComment", {
          storyId,
          commentToAdd,
        });
      } catch (error) {
        console.error("Cannot add comment:", error);
      }
    },
    async addStoryLike(storyId, userId) {
      try {
        await this.$store.dispatch("addStoryLike", {
          storyId,
          userId,
        });
      } catch (error) {
        console.log.error("Cannot add like: ", error);
      }
    },
  },
  components: { StoryList, StoryCreate },
};
</script>
