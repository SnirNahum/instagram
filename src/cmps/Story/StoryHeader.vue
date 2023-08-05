<template>
  <section class="story-header">
    <img :src="user.imgUrl" />

    <Router-link :to="`/profile/${user._id}`">
      <p>{{ user.username }}</p>
    </Router-link>
    <span class="dot">&bull;</span>
    <span>{{ getRelativeTime(story.createdAt) }}</span>
    <i class="icon" v-html="getSvg('more')"></i>
  </section>
</template>

<script>
import { svgService } from "../../services/svg.service";
import { getRelativeTime } from "../../services/getRelativeTime.js"; // Adjust the import path

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    story: {
      type: Object,
      required: true,
    },
  },

  methods: {
    getSvg(name) {
      return svgService.getInstagramSvgs(name);
    },
    getRelativeTime, // Include the imported function here
  },
};
</script>
