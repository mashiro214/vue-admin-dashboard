<template>
  <div class="team">
    <AppHeader />
    <div class="container">
      <h2 class="title-2" :class="{ dark: !isDarkMode, light: isDarkMode }">
        Team
      </h2>
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
          <h3 class="title-3" :class="{ dark: !isDarkMode, light: isDarkMode }">
            Slack
          </h3>
          <p
            class="description"
            :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
          >
            This is the description part of Slack. This is the description part
            of Slack.
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
          <h3 class="title-3" :class="{ dark: !isDarkMode, light: isDarkMode }">
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
          <h3 class="title-3" :class="{ dark: !isDarkMode, light: isDarkMode }">
            Figma
          </h3>
          <p
            class="description"
            :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
          >
            This is the description part of Figma. This is the description part
            of Figma.
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
          <h3 class="title-3" :class="{ dark: !isDarkMode, light: isDarkMode }">
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
          <h3 class="title-3" :class="{ dark: !isDarkMode, light: isDarkMode }">
            Dropbox
          </h3>
          <p
            class="description"
            :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
          >
            This is the description part of Dropbox. This is the description
            part of Dropbox.
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "TeamView",
  components: {
    AppHeader,
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 15%;
  padding-right: 10%;
}
.title-2.light {
  @include heading-2($white);
  text-align: start;
}
.title-2.dark {
  @include heading-2($black);
  text-align: start;
}
.title-3.light {
  @include heading-3($white);
  margin-bottom: 16px;
}
.title-3.dark {
  @include heading-3($black);
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
  margin: 0 -20px;
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
  text-align: center;
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
  &:hover {
    cursor: pointer;
  }
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
  background: #ffffff;
  // box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 15px 30px rgba(103, 110, 144, 0.15);
  // 相当于：.button:hover
  &:hover {
    // box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
    box-shadow: 0 4px 4px rgba(103, 110, 144, 0.05),
      0 2px 2px rgba(103, 110, 144, 0.05);
  }
}
.dark-card {
  background: $super-dark-blue;
  // box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  &:hover {
    // box-shadow: 0px 30px 60px rgba(255,255,255,0.35);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25);
  }
}
</style>
