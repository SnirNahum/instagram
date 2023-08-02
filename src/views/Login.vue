<template>
  <section class="login-container">
    <div class="form-container">
      <div class="login-images">
        <!-- <img src="../assets/imgs/screenshot2.png" /> -->
        <!-- <img src="../assets/imgs/screenshot4.png" /> -->
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
                v-model="loginCredentials.username"
                placeholder="Username"
              />
              <input
                class="login-input"
                type="password"
                v-model="loginCredentials.password"
                placeholder="Password"
              />
              <button class="login-btn" @click="onSubmitForm">Log in</button>
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
import { userService } from "../services/user.service.local";
import { showErrorMsg } from "../services/event-bus.service";
export default {
  data() {
    return {
      loginCredentials: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    async onSubmitForm() {
      try {
        const user = await this.$store.dispatch("login", {
          userCred: this.loginCredentials,
        });
        if (!user) {
          showErrorMsg("wrong usernamae or password ");
        } else {
          this.$router.push("/");
        }
      } catch {
        (err) => console.log(err);
      }
    },
  },
};
</script>
