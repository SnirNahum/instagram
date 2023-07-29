<template>
  <nav class="side-nav">
    <SideNavLogo />
    <SideNavLinks />
  </nav>
</template>

<script>
import { svgService } from "../../services/svg.service";
import SideNavLinks from "./SideNavlinks.vue";
import SideNavLogo from "./SideNavLogo.vue";

export default {
  components: {
    SideNavLinks,
    SideNavLogo,
  },
  methods: {
    getSvg(name) {
      return svgService.getInstagramSvgs(name);
    },
  },
};
</script>
