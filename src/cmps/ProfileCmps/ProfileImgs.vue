<template>
  <section class="profile-img">
    <div class="image-container">
      <div class="image-wrapper">
        <img
          src="https://img.freepik.com/free-vector/cute-astronaut-peace-moon-with-rocket-cartoon-vector-icon-illustration-science-technology-icon_138676-5030.jpg"
        />
        <i class="profile-like-icon" v-html="getSvg('like')"></i>
        <i class="profile-comment-icon" v-html="getSvg('comment')"></i>
        <img
          src="https://resources.premierleague.com/premierleague/photos/players/250x250/p235674.png"
        />
        <img
          src="https://img.freepik.com/free-vector/cute-astronaut-peace-moon-with-rocket-cartoon-vector-icon-illustration-science-technology-icon_138676-5030.jpg"
        />
        <img
          src="https://resources.premierleague.com/premierleague/photos/players/250x250/p235674.png"
        />
        <img
          src="https://img.freepik.com/free-vector/cute-astronaut-peace-moon-with-rocket-cartoon-vector-icon-illustration-science-technology-icon_138676-5030.jpg"
        />
        <img
          src="https://img.freepik.com/free-vector/cute-astronaut-peace-moon-with-rocket-cartoon-vector-icon-illustration-science-technology-icon_138676-5030.jpg"
        />
        <img
          src="https://img.freepik.com/free-vector/cute-astronaut-peace-moon-with-rocket-cartoon-vector-icon-illustration-science-technology-icon_138676-5030.jpg"
        />
        <img
          src="https://img.freepik.com/free-vector/cute-astronaut-peace-moon-with-rocket-cartoon-vector-icon-illustration-science-technology-icon_138676-5030.jpg"
        />
      </div>
    </div>
  </section>
</template>
<script>
import { svgService } from "../../services/svg.service";

export default {
  methods: {
    getSvg(like) {
      return svgService.getInstagramSvgs(like);
    },
  },
};
</script>
