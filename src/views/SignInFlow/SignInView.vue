<template>
  <!-- :class是Vue的一个特殊指令，允许你动态地将类绑定到HTML元素上。它在等号后面接收一个JavaScript表达式，在这个例子中，表达式是一个对象。

对象的键是类名，值是一个布尔表达式。如果表达式的值为true，那么对应的类名将会被添加到元素上；如果为false，那么对应的类名将不会被添加。 -->
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <div
      class="request"
      :class="{ 'light-request': isDarkMode, 'dark-request': !isDarkMode }"
    >
      Don't have a Vue Dashboard account?
      <router-link to="/request">Request an account</router-link>
    </div>
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign into Vue Dashboard HQ
      </h4>
      <input
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        type="email"
        placeholder="Email"
      />
      <input
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        type="password"
        placeholder="Password"
      />
      <button>Sign In</button>
      <router-link
        to="/recover"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        >Forgot your password?</router-link
      >
      <button @click="toggleDarkMode">Toggle</button>
    </div>
  </div>
</template>

<script>
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

  /* computed:
  当你的组件需要根据属性或全局状态（例如，Vuex 中的状态）计算出一些值时。在这种情况下，你可以使用计算属性来创建一个依赖于全局状态的本地值。
  
  当你需要创建的值依赖于其他数据，并且这个值应该随着依赖数据的变化自动更新。
  */
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },

  // function that triggers changes
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    },
  },
};
</script>

<style lang="scss" scoped>
.light-background {
  background-color: $light-gray;
}

.dark-background {
  background-color: $dark-blue;
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

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);
  a {
    color: black;
  }
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}

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

.request {
  position: absolute;
  top: 40px;
  right: 40px;
}

h4 {
  margin: 0;
  line-height: 34px;
  font-size: 24px;
  text-align: center;

  color: #ffffff;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  height: 60px;
  // width of the container
  width: 100%;

  font-size: 20px;
  color: white;
  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

button {
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
}

// style for router link
a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;

  // no underline
  text-decoration: none;
}
</style>
