const { themes } = require('prism-react-renderer');

module.exports = {
  title: '小友+',
  tagline: '轻量快速的计算机自动化工具',
  url: 'https://winui.net',
  baseUrl: '/winui/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico', 
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docx', // 文档源文件在 docx 目录
          routeBasePath: 'docs', // 访问路径为 /docs
          sidebarPath: require.resolve('./sidebars.js'), // 确保文件名一致
          editUrl: 'https://github.com/your/repo/edit/main/docx/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: '小友+',
      logo: {
        alt: 'logo',
        src: 'favicon.ico', // 对应 static/favicon.ico
      },
      items: [
        {
          type: 'docSidebar',   // 推荐用法：直接绑定侧边栏
          sidebarId: 'sidebar', // 对应 sidebars.js 里的导出的 key 名
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://shelllet.github.io/winui/#/',
          label: '开发版',
          position: 'right',
        },
        {
          href: 'https://winui.net/#/',
          label: '发布版',
          position: 'right',
        },
        {
          to: 'docs/CHANGELOG', // 如果 CHANGELOG 在 docx 目录下，路径应加 docs/ 前缀
          label: '更新日志',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  },
};
