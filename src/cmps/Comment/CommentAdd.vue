<template>
  <div class="comment-add">
    <input type="text" v-model="commentTxt" placeholder="Add a comment..." />
    <p v-if="commentTxt?.length > 0" class="comment-btn" @click="addComment">
      Post
    </p>
  </div>
</template>

<script>
import { storyService } from "../../services/story.service.local";
import { svgService } from "../../services/svg.service";

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
    getSvg(save, share, comment, like) {
      return svgService.getInstagramSvgs(save, share, comment, like);
    },
  },
};
</script>
