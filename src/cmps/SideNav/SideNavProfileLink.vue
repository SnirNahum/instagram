<template>
  <RouterLink class="side-nav-link" :to="to">
    <img
      src="https://www.shutterstock.com/image-vector/cute-astronaut-holding-flag-on-600w-2106090470.jpg"
    />
    <span>{{ label }}</span>
  </RouterLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    // img: {
    //   type: Image,
    // },
  },
};
</script>
