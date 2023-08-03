<template>
  <div class="modal" @click="onCloseModal">
    <div v-if="story" class="modal-content">
      <div class="comment-modal-img">
        <img :src="story.imgUrl" />
      </div>
      <div class="comments-section">
        <div class="story-header">
          <img class="mini-user" :src="story.by.imgUrl" />
          <div class="comment-info">
            <p>{{ story.by.username }}</p>
            <span>labels</span>
          </div>
        </div>
        <hr />
        <div class="user-img-comment">
          <img class="mini-user" :src="story.by.imgUrl" />
          <span>{{ story.txt }}</span>
        </div>
        <section class="comment">
          <div
            v-for="(comment, index) in story.comments"
            class="users-comments"
          >
            <!-- <pre>{{  }}</pre> -->
            <img class="mini-user" :src="story.comments[index].by.imgUrl" />
            <span>{{ comment.txt }}</span>
          </div>
        </section>
        <CommentAdd
          :story="story"
          @commentToAdd="commentToAdd"
          class="comment-add-input"
        />
      </div>
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

    async commentToAdd({ storyId }, commentToAdd) {
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
