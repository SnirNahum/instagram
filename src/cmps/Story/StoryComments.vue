<template>
  <section class="story-info">
    <p v-if="story.likedBy.length > 0" class="likes-count">{{ likesCount }}</p>
    <p v-if="story.txt.length > 0">
      {{ story.by.username }} <span>{{ story.txt }}</span>
    </p>
    <RouterLink :to="`/${story._id}`">
      <span class="view-all-comments">
        {{ commentMessage }}
      </span>
    </RouterLink>
    <div
      class="comment-mini-user"
      v-if="story.comments && story.comments.length > 0"
    >
      <p>
        {{ story.comments[story.comments?.length - 1].by.username }}
        <span class="user-comments">
          {{ story.comments[story.comments?.length - 1].txt }}
        </span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  computed: {
    commentMessage() {
      const commentCount = this.story.comments?.length || 0;

      if (commentCount > 1) {
        return `View all ${commentCount} comments`;
      } else if (commentCount === 1) {
        return "View comment";
      } else {
        return "Be the first to comment";
      }
    },
    likesCount() {
      const likeCount = this.story.likedBy?.length || 0;
      if (likeCount > 1) {
        return `${likeCount} likes`;
      } else return `${likeCount} like`;
    },
  },
};
</script>
