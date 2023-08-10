<template>
  <div class="home">
    <AppHeader />
    <div class="container">
      <div class="spread">
        <h1 class="title-1" :class="{ dark: !isDarkMode, light: isDarkMode }">
          Traffic Overview
        </h1>
        <div
          class="toggle"
          :class="{ 'light-box': isDarkMode, 'dark-box': !isDarkMode }"
        >
          <!-- ref 是一个特殊的属性，用于在JavaScript中获取对模板中DOM元素或子组件的引用。这使得你能够从组件的实例中访问这些引用，并执行一些不容易通过Vue数据和方法完成的操作。 -->
          <div ref="days" class="days" @click="toggleDays">Days</div>
          <div ref="weeks" class="weeks" @click="toggleWeeks">Weeks</div>
          <div ref="months" class="months" @click="toggleMonths">Months</div>
        </div>
      </div>
      <apexchart
        width="100%"
        type="area"
        :options="chartOptions"
        :series="series"
      ></apexchart>
      <div class="iframe-container">
        <iframe
          v-if="isDarkMode"
          src="https://lookerstudio.google.com/embed/reporting/aa54825a-31ec-4f3a-9da7-7c8745c50d4f/page/N0LZD"
          frameborder="0"
          style="border: 0"
          allowfullscreen
        ></iframe>
        <iframe
          v-if="!isDarkMode"
          src="https://lookerstudio.google.com/embed/reporting/0378b668-3e70-4a4a-8122-b16f41c87c3f/page/N0LZD"
          frameborder="0"
          style="border: 0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import AppHeader from "@/components/AppHeader.vue";
import { db } from "@/firebase.js";
import { collection, getDocs } from "@firebase/firestore";

export default {
  name: "HomeView",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  // to use the imported components in html
  components: {
    AppHeader,
    apexchart: VueApexCharts,
  },

  async firestore() {
    const trafficRef = collection(db, "traffic");

    try {
      const trafficSnapshot = await getDocs(trafficRef);
      // const trafficData = trafficSnapshot.docs.map((doc) => doc.data());
      const trafficData = trafficSnapshot.docs.reduce((acc, doc) => {
        acc[doc.id] = doc.data();
        return acc;
      }, {});
      console.log(trafficData);

      // const activeUsers = Object.values(trafficData.activeUsers);
      // const newUsers = Object.values(trafficData.newUsers);

      const activeUsers = [];
      const newUsers = [];
      const todaysDate = new Date();
      const lastMonthDate = todaysDate.setDate(todaysDate.getDate() - 30);

      Object.keys(trafficData.activeUsers).map((key) => {
        if (new Date(trafficData.activeUsers[key][0]) > lastMonthDate) {
          activeUsers.push(trafficData.activeUsers[key]);
        }
      });

      Object.keys(trafficData.newUsers).map((key) => {
        if (new Date(trafficData.newUsers[key][0]) > lastMonthDate) {
          newUsers.push(trafficData.newUsers[key]);
        }
      });

      this.series = [
        {
          name: "active users",
          data: activeUsers,
        },
        {
          name: "new users",
          data: newUsers,
        },
      ];
    } catch (error) {
      alert(error);
    }
  },

  data() {
    return {
      chartOptions: {
        colors: ["#14f1d9", "#7b42f6"],
        // 图例
        legend: {
          labels: {
            colors: this.$store.getters.isDarkMode
              ? ["white", "white"]
              : ["black", "black"],
          },
          position: "top",
        },
        // 悬浮菜单
        tooltip: {
          theme: "dark",
        },
        grid: {
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        chart: {
          id: "users",
        },
        xaxis: {
          type: "datetime",
        },
      },
      // data values in y-axis
      series: [],
    };
  },
  methods: {
    // 动态切换样式
    async toggleDays() {
      this.$refs.days.style.color = "white";
      this.$refs.days.style.background = "#56CCF2";
      this.$refs.days.style.borderRadius = "4px";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";

      const trafficRef = collection(db, "traffic");
      const activeUsers = [];
      const newUsers = [];

      try {
        const trafficSnapshot = await getDocs(trafficRef);
        // const trafficData = trafficSnapshot.docs.map((doc) => doc.data());
        const trafficData = trafficSnapshot.docs.reduce((acc, doc) => {
          acc[doc.id] = doc.data();
          return acc;
        }, {});
        console.log(trafficData);

        const todaysDate = new Date();
        const lastWeekDate = todaysDate.setDate(todaysDate.getDate() - 7);

        Object.keys(trafficData.activeUsers).map((key) => {
          if (new Date(trafficData.activeUsers[key][0]) > lastWeekDate) {
            activeUsers.push(trafficData.activeUsers[key]);
          }
        });

        Object.keys(trafficData.newUsers).map((key) => {
          if (new Date(trafficData.newUsers[key][0]) > lastWeekDate) {
            newUsers.push(trafficData.newUsers[key]);
          }
        });

        this.series = [
          {
            name: "active users",
            data: activeUsers,
          },
          {
            name: "new users",
            data: newUsers,
          },
        ];
      } catch (error) {
        alert(error);
      }
    },
    async toggleWeeks() {
      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "none";

      this.$refs.weeks.style.color = "white";
      this.$refs.weeks.style.background = "#56CCF2";
      this.$refs.weeks.style.borderRadius = "4px";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";

      const trafficRef = collection(db, "traffic");
      const activeUsers = [];
      const newUsers = [];

      try {
        const trafficSnapshot = await getDocs(trafficRef);
        // const trafficData = trafficSnapshot.docs.map((doc) => doc.data());
        const trafficData = trafficSnapshot.docs.reduce((acc, doc) => {
          acc[doc.id] = doc.data();
          return acc;
        }, {});
        console.log(trafficData);

        const todaysDate = new Date();
        const lastMonthDate = todaysDate.setDate(todaysDate.getDate() - 30);

        Object.keys(trafficData.activeUsers).map((key) => {
          if (new Date(trafficData.activeUsers[key][0]) > lastMonthDate) {
            activeUsers.push(trafficData.activeUsers[key]);
          }
        });

        Object.keys(trafficData.newUsers).map((key) => {
          if (new Date(trafficData.newUsers[key][0]) > lastMonthDate) {
            newUsers.push(trafficData.newUsers[key]);
          }
        });

        this.series = [
          {
            name: "active users",
            data: activeUsers,
          },
          {
            name: "new users",
            data: newUsers,
          },
        ];
      } catch (error) {
        alert(error);
      }
    },
    async toggleMonths() {
      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "none";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";

      this.$refs.months.style.color = "white";
      this.$refs.months.style.background = "#56CCF2";
      this.$refs.months.style.borderRadius = "4px";

      const trafficRef = collection(db, "traffic");
      const activeUsers = [];
      const newUsers = [];

      try {
        const trafficSnapshot = await getDocs(trafficRef);
        // const trafficData = trafficSnapshot.docs.map((doc) => doc.data());
        const trafficData = trafficSnapshot.docs.reduce((acc, doc) => {
          acc[doc.id] = doc.data();
          return acc;
        }, {});
        console.log(trafficData);

        const todaysDate = new Date();
        const lastYearDate = todaysDate.setDate(todaysDate.getDate() - 365);

        Object.keys(trafficData.activeUsers).map((key) => {
          if (new Date(trafficData.activeUsers[key][0]) > lastYearDate) {
            activeUsers.push(trafficData.activeUsers[key]);
          }
        });

        Object.keys(trafficData.newUsers).map((key) => {
          if (new Date(trafficData.newUsers[key][0]) > lastYearDate) {
            newUsers.push(trafficData.newUsers[key]);
          }
        });

        this.series = [
          {
            name: "active users",
            data: activeUsers,
          },
          {
            name: "new users",
            data: newUsers,
          },
        ];
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 15%;
  padding-right: 15%;
}

.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 75%; /* 16:9 ratio */
  height: 0;
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.spread {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  width: 100%;
}

.toggle {
  @include medium-text;
  color: $dark-gray;
  height: 40px;
  width: 240px;
  border-radius: 6px;
  padding: 5px;
  display: flex;
  flex-wrap: nowrap;

  &:hover {
    cursor: pointer;
  }
}

@mixin toggle-settings {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 100%;
}

.days {
  @include toggle-settings();
}

.weeks {
  @include toggle-settings();
  background: $teal;
  border-radius: 4px;
  color: $white;
}

.months {
  @include toggle-settings();
}
</style>
