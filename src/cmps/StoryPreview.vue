<template>
  <section>
    <img :src="story.imgUrl" alt="" />
    <p>{{ story.txt }}</p>
    <input type="text" placeholder="comment" />
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
