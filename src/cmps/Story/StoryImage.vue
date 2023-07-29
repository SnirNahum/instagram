<template>
  <div class="story-image-container">
    <img :src="imgUrl" class="story-image" />
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
  },
};
</script>
