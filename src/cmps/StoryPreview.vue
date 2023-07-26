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
        <p class="userComments">User comments</p>
        <p class="viewAllComments">View all 212 comments</p>
      </section>
    </section>
    <input type="text" placeholder="Comment" />
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
