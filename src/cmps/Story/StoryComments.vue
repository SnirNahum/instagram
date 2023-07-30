<template>
  <section class="story-info">
    <p class="likes-count">{{ story.likes }} 22,737 likes</p>
    <p>
      {{ story.by.username }} <span>{{ story.txt }}</span>
    </p>
    <RouterLink :to="`/${story._id}`">
      <span class="view-all-comments">
        <!-- View all {{ story.comments?.length }} comments -->
        View all 147 comments
      </span>
    </RouterLink>
    <div
      class="comment-mini-user"
      v-if="story.comments && story.comments.length > 0"
    >
      <!-- <img
        v-if="this.$route.params.id === '/'"
        :src="story.comments[0].by.imgUrl"
      /> -->

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
