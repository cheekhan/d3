import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "cheekhan",
  description: "前端调试侠",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/API/' },
      { text: "About", link: "/About/" }
    ],

    sidebar: [
      {
        text: '快速入门',
        items: [
          { text: '安装', link: '/markdown-examples' },
          { text: '简介', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cheekhan' }
    ]
  },
  srcDir: 'src'
})
