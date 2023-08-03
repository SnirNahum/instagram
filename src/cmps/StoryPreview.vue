<template>
  <section class="story-preview">
    <StoryHeader :user="story.by" />
    <StoryImage :imgUrl="story.imgUrl" />
    <StoryActions :story="story" />
    <StoryComments :story="story" />
    <CommentAdd :story="story" @commentToAdd="commentToAdd" />
    <hr />
  </section>
</template>

<script>
import StoryHeader from "./Story/StoryHeader.vue";
import StoryImage from "./Story/StoryImage.vue";
import StoryActions from "./Story/storyActions.vue";
import StoryComments from "./Story/StoryComments.vue";
import CommentAdd from "./Comment/CommentAdd.vue";

export default {
  props: {
    story: {
      type: [Object, null],
      required: true,
    },
  },
  methods: {
    commentToAdd({ storyId }, commentToAdd) {
      this.$emit("commentToAdd", storyId, commentToAdd);
    },
  },
  components: {
    CommentAdd,
    StoryHeader,
    StoryImage,
    StoryActions,
    StoryComments,
  },
};
</script>
