<template>
  <section class="profile-header-actions">
    <p>Manor Solomon</p>
    <section class="profile-header-actions-btn">
      <button>Following</button>
      <button>Message</button>
      <button><i class="icon" v-html="getSvg('addUser')"></i></button>
      <i class="icon more" v-html="getSvg('more')"></i>
    </section>
  </section>
</template>
<script>
import { svgService } from "../../services/svg.service";

export default {
  methods: {
    getSvg(addUser) {
      return svgService.getInstagramSvgs(addUser);
    },
  },
};
</script>
