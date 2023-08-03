<template>
  <RouterLink class="side-nav-link" :to="to">
    <i class="icon" v-html="currentSvg"></i>
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
  data() {
    return {
      isLogoDisplayed: true,
      currentSvg: svgService.getInstagramSvgs(this.icon),
    };
  },
  watch: {
    $route(to) {
      if (to.path === this.to) {
        this.toggleSvg();
      }
    },
  },
  methods: {
    toggleSvg() {
      this.isLogoDisplayed = !this.isLogoDisplayed;
      this.currentSvg = this.isLogoDisplayed
        ? svgService.getInstagramSvgs(this.icon)
        : svgService.getInstagramSvgs(this.icon + "Active");
    },
  },
};
</script>
