<template>
  <section class="profile-header-actions">
    <p>{{ user.fullname }}</p>
    <section class="profile-header-actions-btn">
      <button>Edit Profile</button>
      <button>Dashboard</button>
      <button><i class="icon" v-html="getSvg('addUser')"></i></button>
      <i class="icon more" v-html="getSvg('moreProfile')"></i>
    </section>
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
    getSvg(moreProfile) {
      return svgService.getInstagramSvgs(moreProfile);
    },
  },
  computed: {
    username() {
      return this.$store.getters.loadUser;
    },
  },
};
</script>
