<template>
  <section class="story-info">
    <p class="likes-count">{{ story.likes }} 27,171 likes</p>
    <p class="likes-count">{{ story.txt }}</p>
    <div
      class="comment-mini-user"
      v-if="story.comments && story.comments.length > 0"
    >
      <img :src="story.comments[0].by.imgUrl" />
      <p class="user-comments">
        {{ story.comments[story.comments?.length - 1].txt }}
      </p>
    </div>
    <RouterLink :to="`/${story._id}`">
      <p class="view-all-comments">
        View all {{ story.comments?.length }} comments
      </p>
    </RouterLink>
    <hr />
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
