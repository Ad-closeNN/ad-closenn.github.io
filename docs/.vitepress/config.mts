import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  title: "Awesome Docments",
  description: "极为普通的教程存放地",
  base: '/',
  head: [['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/Ad-closeNN/ad-closenn.github.io/docs/thinking.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '教程', link: '/docs/GitHub Desktop GPG'},
      { text: '成员', link: '/team/members' },
      { text: '如何为 PCL2 做贡献', link: '/PCL/before/Get Started' },
      { text: 'GitHub', link: 'https://github.com/Ad-closeNN/ad-closenn.github.io' },
      {
          text: '无关链接',
          items: [
            { text: 'PCL2 启动器本体源代码', link: 'https://github.com/Hex-Dragon/PCL2' },
            { text: '下载 PCL2 启动器正式版', link: 'https://afdian.com/p/0164034c016c11ebafcb52540025c377' },
            { text: 'PCL-Community PCL 非官方社区', link: 'https://github.com/PCL-Community' },
          ]
      }    
    ],
    sidebar: {
      '/docs/': [
        {
          text: '教程',
          items: [
            { text: 'Git 提交具有 Verified 标签', link: '/docs/GitHub Desktop GPG' },
          ]
        },
        {
          text: '',
          items: [
            { text: '成员列表', link: '/team/members' },
            { text: 'GitHub 仓库', link: 'https://github.com/Ad-closeNN/ad-closenn.github.io'}
          ]
        }
    ],
      '/team/': [
        {
          text: '成员',
          items: [
            { text: '成员列表', link: '/team/members' },
          ]
        }
    ],
      '/PCL/': [
        {
          text: '如何为 PCL2 做贡献'
        },
        {
          text: '开始之前',
          items: [
            { text: '前述', link: '/PCL/before/Get Started' },
            { text: '常用链接', link: '/PCL/before/links' },
          ]
        }
    ]
  },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ad-closeNN/ad-closenn.github.io' }
    ],
    editLink: {
      pattern: 'https://github.com/Ad-closeNN/ad-closenn.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: '基于 <a href="https://github.com/Ad-closeNN/ad-closenn.github.io/blob/main/LICENSE" target="_blank">MIT</a> 许可发布',
      copyright: 'Copyright © 2024 <a href="https://github.com/Ad-closeNN/" target="_blank">Ad-closeNN</a>'
    },
    docFooter: {
        prev: '上一页',
        next: '下一页'
    },
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    returnToTopLabel: '返回顶部',
    search: {
      provider: 'local',
    },
    logo: 'https://cdn.jsdelivr.net/gh/Ad-closeNN/ad-closenn.github.io/docs/thinking.svg'
  },
  lastUpdated: true
})