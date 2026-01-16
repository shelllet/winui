module.exports = {
  title: 'WinUI',
  tagline: '文档迁移自 Docsify -> Docusaurus',
  url: 'https://your-domain.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'shelllet',
  projectName: 'WinUi',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs_src',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/shelllet/WinUi/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'WinUI 文档',
      items: [
        {to: '/', label: '文档', position: 'left'},
        {href: 'https://github.com/shelllet/WinUi', label: 'GitHub', position: 'right'},
      ],
    },
  },
};
