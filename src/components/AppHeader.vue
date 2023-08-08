<!-- type in vbase to auto complete -->
<template>
  <div id="nav">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a @click="onClick">Logout</a>
    </nav>
  </div>
</template>

<script>
import { auth } from "@/main";

export default {
  name: "AppHeader",
  methods: {
    onClick() {
      const user = auth.currentUser();

      user
        .logout()
        .then(() => {
          this.$router.push({
            name: "signin",
            params: { userLoggedOut: true },
          });
        })
        .catch((error) => {
          alert("Error: " + error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
