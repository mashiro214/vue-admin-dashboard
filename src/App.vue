<template>
  <div
    id="app"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <!-- header for the entire app -->
    <router-view />
  </div>
</template>

<script>
// import animate.css
// import "animate.css";

export default {
  name: "App",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  // 生命周期函数
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "#f0f3f5";
  },
};
</script>

<style lang="scss">
@import "animate.css";
// css selector
// apply to all elements in html
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

// 使背景色应用到整个页面
body {
  margin: 0;
  background-color: $dark-blue;
}

.title-1.dark {
  @include heading-3($black);
}

.title-1.light {
  @include heading-3($white);
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
  // text-align: center;
  color: $white;
}

.title-4 {
  margin: 0;
  line-height: 34px;
  font-size: 24px;
  text-align: center;
}

.input-field {
  // background: rgba(255, 255, 255, 0.2);
  // border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  height: 60px;
  // width of the container
  width: 100%;

  font-size: 20px;
  color: white;
  padding-left: 20px;
  margin-top: 20px;

  /* &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  } */
}

.click-button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;

  height: 60px;
  width: 100%;

  font-size: 20px;
  color: white;

  margin-top: 20px;
  margin-bottom: 40px;
  &:hover {
    cursor: pointer;
  }
}

// style for router link
.message {
  line-height: 25px;
  font-size: 16px;
  text-align: center;

  // no underline
  text-decoration: none;
}

/* THEME */
.light-background {
  background-color: $light-gray;
  // style property for svg
  line,
  text {
    stroke: $black;
  }
}

.dark-background {
  background-color: $dark-blue;
  // style property for svg
  line,
  text {
    stroke: $light-gray;
  }
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: $white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: $black;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}

.light-box {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark-box {
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

line,
text {
  opacity: 0.2;
}
</style>
