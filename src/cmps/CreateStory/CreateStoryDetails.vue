<template>
  <div class="create-details">
    <div class="story-header">
      <img :src="user.imgUrl" />
      <p>{{ user.username }}</p>
    </div>
    <div class="create-input">
      <textarea
        type="text"
        placeholder="Write a caption..."
        v-model="storyToAdd.txt"
      ></textarea>
    </div>
    <div class="input-tools">
      <div class="emoji">
        <i class="icon" v-html="getSvg('emoji')"></i>
      </div>
      <span>{{ storyToAdd.txt.length }} / 200</span>
    </div>
    <div class="location">Add location</div>
  </div>
</template>

<script>
export default {
  props: {
    storyToAdd: Object,
    user: Object,
  },
  methods: {
    getSvg(emoji) {
      return svgService.getInstagramSvgs(emoji);
    },
  },
};
</script>
