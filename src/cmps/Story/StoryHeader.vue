<template>
  <section class="story-header">
    <img :src="user.imgUrl" />
    <Router-link to="/profile/userId">
      <p>{{ user.username }}</p></Router-link
    >
    <i class="icon" v-html="getSvg('more')"></i>
  </section>
</template>

<script>
import { svgService } from "../../services/svg.service";
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getSvg(name) {
      return svgService.getInstagramSvgs(name);
    },
  },
};
</script>
