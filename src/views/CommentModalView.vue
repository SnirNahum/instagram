<template>
  <div class="modal" @click="onCloseModal">
    <div v-if="story" class="modal-content">
      <div class="comment-modal-img">
        <img :src="story.imgUrl" />
      </div>
      <div class="comments-section">
        <div class="story-header">
          <router-link class="story-header" :to="`/profile/${story.by._id}`">
            <img class="mini-user" :src="story.by.imgUrl" />
          </router-link>
          <div class="comment-info">
            <router-link :to="`/profile/${story.by._id}`">
              <p>{{ story.by.username }}</p>
            </router-link>

            <span>labels</span>
          </div>
        </div>
        <hr />
        <div class="user-img-comment" v-if="story.txt.length > 1">
          <router-link
            class="user-img-comment"
            :to="`/profile/${story.by._id}`"
          >
            <img class="mini-user" :src="story.by.imgUrl" />
            <p>{{ story.by.username }}</p>
          </router-link>
          <span>{{ story.txt }}</span>
        </div>
        <section class="comment">
          <div
            v-for="(comment, index) in story.comments"
            class="users-comments"
          >
            <router-link
              class="users-comments"
              :to="`/profile/${story.comments[index].by._id}`"
            >
              <img class="mini-user" :src="story.comments[index].by.imgUrl" />
              <p>{{ story.comments[index].by.username }}</p>
            </router-link>
            <span>{{ comment.txt }}</span>
          </div>
        </section>
        <div class="comment-add-post">
          <CommentAdd
            :story="story"
            @commentToAdd="commentToAdd"
            class="comment-add-input"
          />
        </div>
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
        this.$router.go(-1);
      }
    },
  },
  components: { CommentAdd },
};
</script>
<style>
p {
  white-space: pre-line;
  word-wrap: break-word;
}
</style>
