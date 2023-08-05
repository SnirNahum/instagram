<template>
  <section class="profile-header-actions">
    <p>{{ user.fullname }}</p>
    <section v-if="userId !== _id" class="profile-header-actions-btn">
      <button>Follow</button>
      <button>Message</button>
      <button><i class="icon" v-html="getSvg('addUser')"></i></button>
      <i class="icon more" v-html="getSvg('moreProfile')"></i>
    </section>
    <section v-else class="profile-header-actions-btn">
      <button>Edit profile</button>
      <button>Dashboard</button>
      <i class="icon" v-html="getSvg('settings')"></i>
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
  data() {
    return {
      userId: this.$route.params.userId,
      _id: this.$store.getters.loggedinUser._id,
    };
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
