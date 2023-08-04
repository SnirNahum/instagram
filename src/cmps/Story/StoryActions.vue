<template>
  <section class="actions">
    <section class="toolbar">
      <i
        @click="addStoryLike"
        class="icon"
        :class="{ bounce: isStoryLiked }"
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
      isStoryLiked: false,
      user: null,
    };
  },
  created() {
    this.user = this.$store.getters.loggedinUser;
    this.isStoryLiked = this.story.likedBy.includes(this.user._id);
  },
  computed: {
    likeSvg() {
      return this.isStoryLiked
        ? this.getSvg("likeActive")
        : this.getSvg("like");
    },
  },
  methods: {
    addStoryLike() {
      this.isStoryLiked = !this.isStoryLiked;
      const userId = this.user._id;
      this.$emit("addStoryLike", this.story._id, userId);
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
