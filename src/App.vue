<template>
  <div id="app">
    <!-- header for the entire app -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  // 生命周期函数
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "#f0f3f5";
  },
};
</script>

<style lang="scss">
// 使背景色应用到整个页面
body {
  background-color: $dark-blue;
}

h1 {
  @include heading-1;
}

p {
  @include large-text-bold($purple);
}

// option+z to wrap the code
#app {
  // use fonts from scss file
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
