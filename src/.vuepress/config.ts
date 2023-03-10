import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from "@vuepress/plugin-docsearch"


export default defineUserConfig({
  base: '/odd/', //部署站点的基础路径
  dest: "dist", // 默认，src/.vuepress/dist 。如果指定，则发布yaml也要修改
  locales: {
    "/": {
      lang: "zh-CN",
      // title: "Odd Repository.",
      description: "一个具有强大功能的 vuepress 主题✨",
    },
    "/en/": {
      lang: "en-US",
      // title: "Odd Repository.",
      description: "A VuePress theme with tons of features✨",
    },
  },
  theme: theme,
  shouldPrefetch: false,
  plugins: [
    // 搜索
    docsearchPlugin({
      appId: 'IFIQLNXSKX',
      apiKey: '20b2ec856eadf16bffdb395fbd50ce23',
      indexName: 'odd',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    })
  ]
});