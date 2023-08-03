<template>
  <div class="home">
    <AppHeader />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "HomeView",
  // to use the imported components in html
  components: {
    HelloWorld,
    AppHeader,
  },
};
</script>
