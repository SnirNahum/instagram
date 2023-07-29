<template>
  <div class="modal" @click="onCloseModal">
    <div v-if="story" class="modal-content">
      <img :src="story.imgUrl" alt="" />
      <section class="comments-section">
        <div class="comments" v-for="comment in story.comments">
          <img class="mini-user" :src="comment.by.imgUrl" alt="" />
          <span>{{ comment.txt }}</span>
        </div>
        <CommentAdd :story="story" @commentToAdd="commentToAdd" />
        <span class="closeModalBtn" @click="returnToFeed">X</span>
      </section>
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
        showErrorMsg("Cannot load story");
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
    onCloseModal(event) {
      if (event.target.classList.contains("modal")) {
        this.returnToFeed();
      }
    },
    returnToFeed() {
      this.$router.push("/");
    },
  },
  components: { CommentAdd },
};
</script>
