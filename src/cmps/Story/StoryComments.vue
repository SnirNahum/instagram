<template>
  <section class="story-info">
    <p class="likes-count">{{ story.likes?.length }} 22,737 likes</p>
    <p>
      {{ story.by.username }} <span>{{ story.txt }}</span>
    </p>
    <RouterLink :to="`/${story._id}`">
      <span class="view-all-comments">
        <span v-if="story.comments?.length > 1">
          View all {{ story.comments.length }} comments</span
        >
        <span v-else-if="story.comments?.length === 1"> View comment</span>
        <span v-else="!story.comments?.length">Be the first to comment</span>
        <!-- View all 147 comments -->
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
};
</script>
