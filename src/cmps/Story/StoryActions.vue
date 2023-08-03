<template>
  <section class="actions">
    <section class="toolbar">
      <i
        @click="addLike"
        class="icon"
        :class="{ bounce: isLiked }"
        v-html="likeSvg"
      ></i>
      <RouterLink class="router-link-comment" :to="`/${story._id}`">
        <i class="icon" v-html="getSvg('comment')"></i>
      </RouterLink>
      <i class="icon" v-html="getSvg('share')"></i>
      <i class="icon" v-html="getSvg('save')"></i>
    </section>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
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
      isLiked: false,
    };
  },
  computed: {
    likeSvg() {
      return this.isLiked ? this.getSvg("likeActive") : this.getSvg("like");
    },
  },
  methods: {
    addLike() {
      this.isLiked = !this.isLiked;
      const likedBy = this.$store.getters.loggedinUser._id;
      console.log(likedBy);
      // this.$emit("addLike", storyId, story.by._id);
    },
    getSvg(like) {
      return svgService.getInstagramSvgs(like);
    },
  },
  components: {
    RouterLink,
  },
};
</script>
