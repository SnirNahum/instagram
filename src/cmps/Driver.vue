<template></template>

<script>
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentStepIndex"]),
  },
  watch: {
    currentStepIndex(newIndex) {
      if (this.driverObj) {
        if (newIndex < this.driverObj.steps.length) {
          this.driverObj.highlight(this.driverObj.steps[newIndex]);
        } else {
        }
      }
    },
  },
  mounted() {
    this.initDriver();
  },
  methods: {
    initDriver() {
      this.driverObj = driver({
        showProgress: true,
        steps: [
          {
            element: ".modal-content-create",
            popover: {
              description:
                "Lets create your dream and share it with world! you can drag your image or click the button",
            },
            onNext: () => {
              this.animateElement(".modal-content-create");
            },
          },
          {
            element: ".upload-story-btn",
            popover: {
              description: "Click here to upload your story",
            },
            onNext: () => {
              this.animateElement(".story-create-input");
            },
          },
          {
            element: ".modal-content-create",
            popover: {
              description: "Here you can preview and edit your story ",
            },
            onNext: () => {},
          },
          {
            element: ".story-create-input",
            popover: {
              description: "Lets put some words in it",
            },
            onNext: () => {},
          },
          {
            element: ".modal-content-create",
            popover: {
              description: "Check it out! Looks amazing no?",
            },
            onNext: () => {},
          },
          {
            element: ".create-story-share",
            popover: {
              description: "You know what they say, sharing is caring!",
            },
            onNext: () => {},
          },
          //   {
          //     element: ".story-preview",
          //     popover: {
          //       description: "You've done it!",
          //     },
          //     onNext: () => {},
          //   },
        ],
      });

      this.driverObj.drive();
    },
  },
};
</script>

<style scoped>
.popover {
  background-color: #333;
  color: #fff;
}
</style>
