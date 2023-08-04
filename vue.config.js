const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 全局引入两个scss文件
  // @/表示根目录src文件夹下
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/global-styles/colors.scss";
        @import "@/global-styles/typography.scss";
        `,
      },
    },
  },
});
