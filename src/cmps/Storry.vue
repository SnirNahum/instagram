<!-- <template>
  <div class="story">
    <div class="story__slider swiper">
      <div class="story__wrapper swiper-wrapper">
        <div class="story__slide swiper-slide">
          <img src="https://picsum.photos/450/800" />
        </div>
        <div class="story__slide swiper-slide">
          <video autoplay muted>
            <source
              src="https://exit109.com/~dnn/clips/RW20seconds_1.mp4#t=.1"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="story__slide swiper-slide">
          <img src="https://picsum.photos/450/810" />
        </div>
      </div>

      <div class="story__next swiper-button-next"></div>
      <div class="story__prev swiper-button-prev"></div>

      <div class="story__pagination swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import Swiper from "swiper/bundle";
import $ from "jquery";

export default {
  mounted() {
    const videos = document.querySelectorAll(".story__slide video");
    videos.forEach((video) => {
      video.parentNode.setAttribute(
        "data-swiper-autoplay",
        (video.duration * 1000).toString()
      );
    });

    const slider = new Swiper(".story__slider", {
      speed: 1,
      watchSlidesProgress: true,
      autoplay: {
        delay: 15000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      navigation: {
        nextEl: ".story__next",
        prevEl: ".story__prev",
      },
      pagination: {
        el: ".story__pagination",
        renderBullet: function (index, className) {
          return `<div class="${className}"><div class="swiper-pagination-progress"></div></div>`;
        },
      },
      on: {
        autoplayTimeLeft(swiper, time, progress) {
          const currentSlide = document.querySelectorAll(
            ".story__slider .swiper-slide"
          )[swiper.activeIndex];
          const currentBullet = document.querySelectorAll(
            ".story__slider .swiper-pagination-progress"
          )[swiper.activeIndex];
          const fullTime = currentSlide.getAttribute("data-swiper-autoplay")
            ? parseInt(currentSlide.getAttribute("data-swiper-autoplay"))
            : swiper.params.autoplay.delay;

          console.log(dataset);
          const percentage =
            Math.min(
              Math.max(
                parseFloat((((fullTime - time) * 100) / fullTime).toFixed(1)),
                0
              ),
              100
            ) + "%";

          gsap.set(currentBullet, { width: percentage });
        },
        transitionEnd(swiper) {
          const allBullets = $(".story__slider .swiper-pagination-progress");
          const bulletsBefore = allBullets.slice(0, swiper.activeIndex);
          const bulletsAfter = allBullets.slice(
            swiper.activeIndex,
            allBullets.length
          );

          if (bulletsBefore.length) {
            gsap.set(bulletsBefore, { width: "100%" });
          }
          if (bulletsAfter.length) {
            gsap.set(bulletsAfter, { width: "0%" });
          }

          const activeSlide = document.querySelectorAll(
            ".story__slider .swiper-slide"
          )[swiper.activeIndex];
          if (activeSlide.querySelector("video")) {
            activeSlide.querySelector("video").currentTime = 0;
          }
        },
      },
    });
  },
};
</script>

<style scoped lang="scss">
.story {
  &__slider {
    width: 450px;
    height: 800px;
    border-radius: 6px;
    overflow: hidden;
  }

  &__wrapper {
  }

  &__slide {
    position: relative;

    video,
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__pagination {
    bottom: unset !important;
    top: 8px !important;
    display: flex;
    padding: 0 4px;

    .swiper-pagination-bullet {
      flex-grow: 1;
      border-radius: 100vh;
      height: 3px;
      margin: 0 2px !important;
      background-color: rgba($color: #f7f7f5, $alpha: 0.4);
      opacity: 1;

      .swiper-pagination-progress {
        height: 100%;
        width: 0%;
        border-radius: 100vh;
        background-color: #f7f7f5;
      }
    }
  }

  &__prev,
  &__next {
    height: 100%;
    width: 50%;
    top: 0;
    margin-top: 0;

    &::after {
      content: none;
    }
  }

  &__prev {
    left: 0;
  }

  &__next {
    right: 0;
  }
}
</style> -->
