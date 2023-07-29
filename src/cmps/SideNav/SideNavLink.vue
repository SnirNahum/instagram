<template>
  <RouterLink class="side-nav-link" :to="to">
    <i class="icon" v-html="getSvg(icon)"></i>
    <span>{{ label }}</span>
  </RouterLink>
</template>

<script>
import { svgService } from "../../services/svg.service";

export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
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
