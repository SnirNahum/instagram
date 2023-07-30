<template>
  <nav class="side-nav">
    <div class="side-nav-container">
      <SideNavLogo />
      <SideNavLinks />
    </div>
  </nav>
</template>

<script>
import { svgService } from "../../services/svg.service";
import SideNavLinks from "./SideNavLinks.vue";
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
<style scoped></style>
