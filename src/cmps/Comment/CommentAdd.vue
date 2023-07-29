<template>
  <div class="comment-add">
    <input type="text" v-model="commentTxt" placeholder="Add a comment..." />
    <i class="icon" v-html="getSvg('share')" @click="addComment"></i>
    <!-- <img src="../../assets/icons/share.png"  /> -->
  </div>
</template>

<script>
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
      storyId: null,
    };
  },
  created() {},

  methods: {
    async addComment() {
      if (!this.commentTxt) {
        return;
      }
      const commentToAdd = this.commentTxt;

      const storyId = this.story._id;
      this.$emit("commentToAdd", { storyId, commentToAdd });

      this.commentTxt = null;
    },
    getSvg(save, share, comment, like) {
      return svgService.getInstagramSvgs(save, share, comment, like);
    },
  },
};
</script>
