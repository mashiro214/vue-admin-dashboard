<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <RequestAccount></RequestAccount>
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
      <h4
        class="title-4"
        :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
      >
        Recover Account
      </h4>

      <form @submit.prevent="onSubmit">
        <input
          class="input-field"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          type="email"
          placeholder="Email"
          v-model="email"
          required
        />

        <button class="click-button">Send Email</button>
      </form>
      <router-link
        class="message"
        to="/signin"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
      >
        Already have an account? Sign in now.
      </router-link>
      <ThemeSwitch></ThemeSwitch>
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch";

import { auth } from "@/main";

export default {
  name: "SignInRecover",
  components: {
    RequestAccount,
    ThemeSwitch,
  },

  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: "",
    };
  },
  methods: {
    onSubmit() {
      const email = this.email;

      auth
        .requestPasswordRecovery(email)
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userRecoveredAccount: true,
              email: email,
            },
          });
        })
        .catch((error) => {
          alert("Error: " + error);
        });
    },
  },
  mounted() {
    const params = this.$route.params;
    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out!";
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  // horizontal
  justify-content: center;
  // vertical
  align-items: center;

  min-height: 100vh;
}

.login {
  width: 400px;
}
</style>
