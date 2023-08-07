<template>
  <!-- :class是Vue的一个特殊指令，允许你动态地将类绑定到HTML元素上。它在等号后面接收一个JavaScript表达式，在这个例子中，表达式是一个对象。

对象的键是类名，值是一个布尔表达式。如果表达式的值为true，那么对应的类名将会被添加到元素上；如果为false，那么对应的类名将不会被添加。 -->
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
        Sign into Vue Dashboard HQ
      </h4>
      <input
        class="input-field"
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        type="email"
        placeholder="Email"
      />
      <input
        class="input-field"
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        type="password"
        placeholder="Password"
      />
      <button class="click-button">Sign In</button>
      <router-link
        class="message"
        to="/recover"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
      >
        Forgot your password?
      </router-link>
      <ThemeSwitch></ThemeSwitch>
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "SignInView",
  // whenever data is changed, components will update
  /*
  Vue 组件的 data 必须是一个返回对象的函数，这是为了确保每个组件实例都维护其独立的数据副本，防止数据在组件间共享。
  */
  // data() {
  //   return {
  //     isDarkMode: true,
  //   };
  // },

  // data() {
  //   return {
  //     show: false,
  //   };
  // },

  // mounted() {
  //   this.show = true;
  // },

  components: {
    RequestAccount,
    ThemeSwitch,
  },

  /* computed:
  当你的组件需要根据属性或全局状态（例如，Vuex 中的状态）计算出一些值时。在这种情况下，你可以使用计算属性来创建一个依赖于全局状态的本地值。

  当你需要创建的值依赖于其他数据，并且这个值应该随着依赖数据的变化自动更新。
  */
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
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
