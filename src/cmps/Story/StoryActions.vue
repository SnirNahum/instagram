<template>
  <section class="actions">
    <section class="toolbar">
      <i class="icon" v-html="getSvg('like')"></i>
      <RouterLink class="router-link-comment" :to="`/${story._id}`"
        ><i class="icon" v-html="getSvg('comment')"></i>
      </RouterLink>
      <i class="icon" v-html="getSvg('share')"></i>
      <i class="icon" v-html="getSvg('save')"></i>
    </section>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
import { svgService } from "../../services/svg.service";

export default {
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getSvg(save, share, comment, like) {
      return svgService.getInstagramSvgs(save, share, comment, like);
    },
  },
  components: { RouterLink },
};
</script>
