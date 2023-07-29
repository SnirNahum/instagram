<template>
  <section class="side-nav-logo">
    <RouterLink to="/">
      <i class="icon" v-html="getSvg('logo')"></i>
    </RouterLink>
  </section>
</template>

<script>
import { svgService } from "../../services/svg.service";

export default {
  methods: {
    getSvg(name) {
      return svgService.getInstagramSvgs(name);
    },
  },
};
</script>
