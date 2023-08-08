<template>
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
  >
    <div class="bubble" v-show="show">
      <div class="notification">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AppNotification",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  },
  /*
   * 用途：props 是一个组件接收的参数列表，允许外部组件或父组件传递数据到子组件中。
   * 类型：通常是一个数组或对象，定义了要接收的属性的名称和类型。
   */
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  border-radius: 6px;
  position: absolute;
  top: 10%;
  padding: 5px 10px 5px 10px;
  background-color: $blue;
}
.notification {
  @include medium-text;
  color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
