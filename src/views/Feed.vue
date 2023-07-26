<template>
  <div class="feedContainer">
    <StoryList :stories="stories" />
  </div>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { storyService } from "../services/story.service.local";
import StoryList from "../cmps/StoryList.vue";
import // getActionRemoveStory,
// getActionUpdateStory,
// getActionAddStoryMsg,
"../store/story.store";
export default {
  data() {
    return {
      storyToAdd: storyService.getEmptyStory(),
    };
  },
  computed: {
    stories() {
      return this.$store.getters.stories;
    },
  },
  created() {
    this.$store.dispatch({ type: "loadStories" });
  },
  methods: {
    // async addStory() {
    //   try {
    //     await this.$store.dispatch({
    //       type: "addStory",
    //       story: this.storyToAdd,
    //     });
    //     showSuccessMsg("Story added");
    //     this.storyToAdd = storyService.getEmptyStory();
    //   } catch (err) {
    //     console.log(err);
    //     showErrorMsg("Cannot add story");
    //   }
    // },
    // async removeStory(storyId) {
    //   try {
    //     await this.$store.dispatch(getActionRemoveStory(storyId));
    //     showSuccessMsg("Story removed");
    //   } catch (err) {
    //     console.log(err);
    //     showErrorMsg("Cannot remove story");
    //   }
    // },
    // async updateStory(story) {
    //   try {
    //     story = { ...story };
    //     story.price = +prompt("New price?", story.price);
    //     await this.$store.dispatch(getActionUpdateStory(story));
    //     showSuccessMsg("Story updated");
    //   } catch (err) {
    //     console.log(err);
    //     showErrorMsg("Cannot update story");
    //   }
    // },
    // async addStoryMsg(storyId) {
    //   try {
    //     await this.$store.dispatch(getActionAddStoryMsg(storyId));
    //     showSuccessMsg("Story msg added");
    //   } catch (err) {
    //     console.log(err);
    //     showErrorMsg("Cannot add story msg");
    //   }
    // },
  },
  components: { StoryList },
};
</script>
