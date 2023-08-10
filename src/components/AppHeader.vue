<!-- type in vbase to auto complete -->
<template>
  <div id="nav" :class="{ 'nav-light': !isDarkMode, 'nav-dark': isDarkMode }">
    <div class="nav-1">
      <img src="@/assets/DCHQ-small.svg" />

      <router-link
        to="/"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >Home</router-link
      >
      <router-link
        to="/manage"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >Manage Users</router-link
      >
      <router-link
        to="/team"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >Team</router-link
      >
    </div>
    <!-- space between -->
    <div class="logout" @click="onClick">
      <a>Logout </a>
      <img src="@/assets/logout.svg" />
    </div>
  </div>
</template>

<script>
import { auth } from "@/main";

export default {
  name: "AppHeader",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
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

<style lang="scss" scoped>
.nav-light {
  background: #f0f3f5;
  box-shadow: 1px 3px 20px 4px #c6d0eb59;
}

.nav-dark {
  background: $super-dark-blue;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  padding: 15px 15%;
  a {
    font-weight: bold;
    color: $dark-gray;

    // 位于该页面时的link样式
    &.router-link-exact-active.dark-nav {
      color: $white;
    }
    &.router-link-exact-active.light-nav {
      color: $middle-blue;
    }
  }
}

.nav-1 {
  display: flex;
  align-items: center;
  a {
    margin-left: 20px;
    margin-right: 20px;
    text-decoration: none;
  }
  img {
    margin-right: 20px;
  }
}
.logout {
  display: flex;
  gap: 3px;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
}
</style>
