<template>
  <!-- :class是Vue的一个特殊指令，允许你动态地将类绑定到HTML元素上。它在等号后面接收一个JavaScript表达式，在这个例子中，表达式是一个对象。

对象的键是类名，值是一个布尔表达式。如果表达式的值为true，那么对应的类名将会被添加到元素上；如果为false，那么对应的类名将不会被添加。 -->
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <AppNotification v-if="hasText" :text="text"></AppNotification>
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

      <!-- 
        1. <form>: HTML 表单标签，通常用于收集用户输入。
        2. @submit: 这是 Vue.js 的事件监听器语法，它等同于原生的 addEventListener 方法。这里，它监听的是表单的 submit 事件。
        3. .prevent: 是一个修饰符，它会调用 event.preventDefault()，阻止浏览器默认的提交表单行为。
        4. "onSubmit": 当表单被提交时（例如，用户点击了提交按钮或按下回车），会调用组件中定义的 onSubmit 方法。 
      -->
      <form @submit.prevent="onSubmit">
        <!-- 
          1. type="email": 指定输入类型为电子邮件。这会为输入提供内置的验证。
          2. placeholder="Email": 当输入框为空时显示的提示文本。
          3. v-model="email": Vue 的双向数据绑定指令。它会绑定输入框的值到组件的 email 数据属性，并且当输入框的值改变时，email 的值也会随之改变。
          4. required: HTML5 属性，表示此输入框必须填写才能提交表单。 
        -->
        <input
          class="input-field"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          type="email"
          placeholder="Email"
          v-model="email"
          required
        />
        <input
          class="input-field"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          type="password"
          placeholder="Password"
          v-model="password"
          required
        />
        <!-- 
          1. 这是一个提交按钮。在 <form> 元素内部，<button> 默认的类型是 submit，所以点击这个按钮会触发表单的 submit 事件。
          2. 由于表单的 submit 事件已经绑定了 onSubmit 方法，并且使用了 .prevent 修饰符阻止了默认行为，所以按钮本身不需要额外的事件监听器。
        -->
        <button class="click-button">Sign In</button>
      </form>
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
import AppNotification from "@/components/AppNotification.vue";
import { auth } from "@/main";

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

  // 用途：components 选项定义了该组件内可以使用的其他组件。这是你将其他组件导入和注册到当前组件的地方，这样你就可以在模板中使用它们。
  // 类型：是一个对象，其键是组件的名称，其值是对应的组件对象。
  components: {
    RequestAccount,
    ThemeSwitch,
    AppNotification,
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
      const password = this.password;

      auth
        .login(email, password, true)
        .then(() => {
          this.$router.replace("/");
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
