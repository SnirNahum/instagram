<template>
  <section>
    <img :src="story.imgUrl" alt="" />
  </section>
</template>

<script>
export default {
  props: {
    story: {
      type: [Object, null],
      required: true,
    },
  },
};
</script>
