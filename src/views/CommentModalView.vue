<template>
  <div class="modal">
    <div v-if="story" class="modal-content">
      <img :src="story.imgUrl" alt="" />
      <section class="commentsSection">
        <div class="comments" v-for="comment in story.comments">
          <img class="miniUser" :src="comment.by.imgUrl" alt="" />
          {{ comment.txt }}
        </div>
        <CommentAdd :story="story" @commentToAdd="commentToAdd" />
        <span class="close" @click="returnToFeed">X</span>
      </section>
      <section class="commentsSection"></section>
    </div>
  </div>
</template>

<script>
import CommentAdd from "../cmps/Comment/CommentAdd.vue";
import { showErrorMsg } from "../services/event-bus.service";

export default {
  props: ["storyId"],
  data() {
    return {
      story: null,
    };
  },
  created() {
    this.loadStory();
  },
  methods: {
    async loadStory() {
      try {
        const { storyId } = this.$route.params;
        await this.$store.dispatch({
          type: "loadStory",
          storyId,
        });
        this.story = this.$store.getters.story;
      } catch (err) {
        showErrorMsg("Cannot load toy");
      }
    },

    async commentToAdd({ storyId, commentToAdd }) {
      try {
        await this.$store.dispatch({
          type: "addStoryComment",
          storyId,
          commentToAdd,
        });
        this.loadStory();
      } catch (error) {
        console.error("Cannot add comment:", error);
      }
    },
    returnToFeed() {
      this.$router.push("/");
    },
  },
  components: { CommentAdd },
};
</script>
