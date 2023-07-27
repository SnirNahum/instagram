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
        <i class="icon" v-html="getSvg('like')"></i>
        <i class="icon" v-html="getSvg('comment')"></i>
        <i class="icon" v-html="getSvg('share')"></i>
        <i class="icon" v-html="getSvg('save')"></i>
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
            {{ story.comments[story.comments?.length - 1].txt }}
          </p>
        </div>
        <RouterLink :to="`/${story._id}`">
          <p class="viewAllComments">
            View all {{ story.comments?.length }} comments
          </p>
        </RouterLink>
      </section>
    </section>
    <CommentAdd :story="story" @commentToAdd="commentToAdd" />
  </section>
</template>

<script>
import { svgService } from "../services/svg.service";
import CommentAdd from "./Comment/CommentAdd.vue";
export default {
  props: {
    story: {
      type: [Object, null],
      required: true,
    },
  },
  // data() {
  //   return {
  //     isCommentModalOpen: false,
  //   };
  // },
  methods: {
    commentToAdd(comment) {
      this.$emit("commentToAdd", comment);
    },
    getSvg(save, share, comment, like) {
      return svgService.getInstagramSvgs(save, share, comment, like);
    },
  },
  components: { CommentAdd },
};
</script>
