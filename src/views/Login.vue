<template>
  <section class="login-container">
    <div class="form-container">
      <div class="login-images">
        <img src="../assets/imgs/screenshot2.png" />
        <img src="../assets/imgs/screenshot4.png" />
      </div>
      <div class="login-form-wrapper">
        <div class="login-form">
          <div class="login-form-inner">
            <div class="login-logo">
              <img src="../assets/imgs/Instagram_Logo_2016.png" alt="" />
            </div>
            <div class="login-input">
              <input
                class="login-input"
                type="text"
                placeholder="Phone number, username, or email"
              />
              <input
                class="login-input"
                type="password"
                placeholder="Password"
              />
              <button class="login-btn">Log in</button>
            </div>
            <p>forgot password?</p>
          </div>
        </div>
        <div class="create-account">
          <p>Don't have an account <span> Sign up</span></p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { svgService } from "../services/svg.service";

export default {
  methods: {
    getSvg(logo) {
      return svgService.getInstagramSvgs(logo);
    },
  },
};
</script>
