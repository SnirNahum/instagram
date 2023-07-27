<template>
  <div class="commentAdd">
    <input type="text" v-model="commentTxt" />
    <img src="../../assets/icons/share.png" @click="addComment" />
  </div>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      commentTxt: null,
      storyId: null,
    };
  },
  created() {},

  methods: {
    async addComment() {
      if (!this.commentTxt) {
        return;
      }
      const commentToAdd = this.commentTxt;

      const storyId = this.story._id;
      this.$emit("commentToAdd", { storyId, commentToAdd });

      this.commentTxt = null;
    },
  },
};
</script>

<style scoped lang="scss">
.commentAdd {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  input {
    flex-grow: 1;

    border-width: 0 0 1px 0;
    border-style: none none solid none;
    border-color: transparent transparent rgb(208, 212, 218) transparent;

    outline: none;
  }
  img {
    width: 21px;
  }
}
</style>
