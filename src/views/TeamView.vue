<template>
  <div class="container">
    <h2 class="title-2">Team</h2>
    <div class="cards">
      <a
        class="animate__animated animate__flipInX card card-1"
        :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
      >
        <img
          src="@/assets/slack.png"
          class="card-header"
          :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
        />
        <h3
          class="title-3"
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        >
          Slack
        </h3>
        <p
          class="description"
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        >
          This is the description part of Slack. This is the description part of
          Slack.
        </p>
      </a>
      <a
        class="animate__animated animate__flipInX card card-2"
        :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
      >
        <img
          src="@/assets/notion.png"
          class="card-header"
          :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
        />
        <h3
          class="title-3"
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        >
          Notion
        </h3>
        <p
          class="description"
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        >
          This is the description part of Notion. This is the description part
          of Notion.
        </p>
      </a>
      <a
        class="animate__animated animate__flipInX card card-3"
        :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
      >
        <img
          src="@/assets/figma.png"
          class="card-header"
          :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
        />
        <h3
          class="title-3"
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        >
          Figma
        </h3>
        <p
          class="description"
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        >
          This is the description part of Figma. This is the description part of
          Figma.
        </p>
      </a>
      <a
        class="animate__animated animate__flipInX card card-4"
        :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
      >
        <img
          src="@/assets/contentful.png"
          class="card-header"
          :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
        />
        <h3
          class="title-3"
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        >
          Contentful
        </h3>
        <p
          class="description"
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        >
          This is the description part of Contentful. This is the description
          part of Contentful.
        </p>
      </a>
      <a
        class="animate__animated animate__flipInX card card-5"
        :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
      >
        <img
          src="@/assets/dropbox.png"
          class="card-header"
          :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
        />
        <h3
          class="title-3"
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        >
          Dropbox
        </h3>
        <p
          class="description"
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        >
          This is the description part of Dropbox. This is the description part
          of Dropbox.
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamView",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: 25px;
}
.title-2 {
  @include heading-2;
  text-align: start;
}
.title-3 {
  @include heading-3;
  margin-bottom: 16px;
}
.description {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-top: 0;
}
.cards {
  display: flex;
  // overflowed content to next line
  flex-wrap: wrap;
  // align one by one
  justify-content: flex-start;
  // even space between the boxes
  align-items: space-evenly;
}
.card {
  // smaller screen size: 100%, on big screen: 300px
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
}
.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.25s;
}
.card-3 {
  animation-delay: 0.75s;
}
.card-4 {
  animation-delay: 1s;
}
.card-5 {
  animation-delay: 1.25s;
}
.card-header {
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.light-header {
  background: $light-gray;
}
.dark-header {
  background: #283049;
}
.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  // 相当于：.button:hover
  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}
.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);
  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}
</style>
