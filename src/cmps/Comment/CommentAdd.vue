<template>
  <div class="comment-add">
    <input type="text" v-model="commentTxt" placeholder="Add a comment..." />
    <p class="comment-btn" :style="buttonStyle" @click="addComment">Post</p>
  </div>
</template>

<script>
import { storyService } from "../../services/story.service.local";

export default {
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      commentTxt: null,
      commentToAdd: storyService.getEmptyComment(),
      storyId: null,
      user: null,
    };
  },
  created() {
    this.user = this.$store.getters.loggedinUser;
  },
  computed: {
    buttonStyle() {
      return {
        opacity: this.commentTxt?.length > 0 ? 1 : 0.5,
        cursor: this.commentTxt?.length > 0 ? "pointer" : "default",
      };
    },
  },
  methods: {
    async addComment() {
      if (!this.commentTxt) {
        return;
      }
      const storyId = this.story._id;
      const commentToAdd = { ...this.commentToAdd };
      commentToAdd.txt = this.commentTxt;
      commentToAdd.by = {
        _id: this.user._id,
        imgUrl: this.user.imgUrl,
        username: this.user.username,
      };

      this.$emit("commentToAdd", { storyId }, commentToAdd);

      this.commentTxt = null;
    },
  },
};
</script>
