<template>
  <section class="storyPreview">
    <section class="storyHeader">
      <img :src="story.by.imgUrl" />
      <p>{{ story.by.fullname }}</p>
    </section>
    <div class="imageContainer">
      <img :src="story.imgUrl" class="image" />
    </div>
    <section class="actions">
      <section class="toolbar">
        <img src="../assets/icons/notifications.png" />
        <img src="../assets/icons/chat.png" />
        <img src="../assets/icons/share.png" />
        <img src="../assets/icons/save.png" />
      </section>
      <section class="info">
        <p class="likesCount">{{ story.likes }} 27,171 likes</p>
        <p class="likesCount">{{ story.txt }}</p>
        <div
          class="commentMiniUser"
          v-if="story.comments && story.comments.length > 0"
        >
          <img :src="story.comments[0].by.imgUrl" />
          <p class="userComments">
            {{ story.comments[story.comments.length - 1].txt }}
          </p>
        </div>
        <RouterLink :to="`/${story._id}`">
          <p class="viewAllComments" @click="commentModalHandler">
            View all 212 comments
          </p>
        </RouterLink>
      </section>
    </section>
    <CommentAdd :story="story" @commentToAdd="commentToAdd" />
  </section>
</template>

<script>
import CommentAdd from "./Comment/CommentAdd.vue";
export default {
  props: {
    story: {
      type: [Object, null],
      required: true,
    },
  },
  data() {
    return {
      isCommentModalOpen: false,
    };
  },
  methods: {
    commentToAdd(comment) {
      this.$emit("commentToAdd", comment);
    },
    commentModalHandler() {
      this.isCommentModalOpen = !this.isCommentModalOpen;
    },
  },
  components: { CommentAdd },
};
</script>
