<template>
  <RouterLink class="side-nav-link" :to="to">
    <img :src="img.src" />
    <span>{{ label }}</span>
  </RouterLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    img: {
      type: Image,
    },
  },
  created() {
    console.log(this.img.src);
  },
};
</script>
