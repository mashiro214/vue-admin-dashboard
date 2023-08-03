<!-- regular html codes wrapped in <template> -->
<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<!-- customized js -->
<script>
export default {
  // name of the component
  name: "HelloWorld",
  // properties coming from parent component
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- lang: css preprocessor -->
<style scoped lang="scss"></style>
