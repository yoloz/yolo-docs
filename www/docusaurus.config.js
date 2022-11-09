// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs',
  tagline: '好记性不如烂笔头',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yoloz', // Usually your GitHub org/user name.
  projectName: 'yolo-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
    // ['en', 'fr', 'pt-BR', 'ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/yoloz/yolo-docs/tree/docusaurus/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/yoloz/yolo-docs/tree/docusaurus/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'yolo-docs',
        logo: {
          alt: 'yolo-docs Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'About',
            position: 'left',
            label: '文档',
          },
          { to: '/blog', label: '博客', position: 'left' },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          //   dropdownItemsAfter: [
          //     {
          //       type: 'html',
          //       value: '<hr style="margin: 0.3rem 0;">',
          //     },
          //     {
          //       href: 'https://github.com/facebook/docusaurus/issues/3526',
          //       label: 'Help Us Translate',
          //     },
          //   ],
          // },
          {
            href: 'https://github.com/yoloz/yolo-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'yolo-docs',
            items: [
              {
                label: '文档',
                to: '/docs/About',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/yoloz/yolo-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} yolo-docs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'scala', 'log', 'properties'],
      },
    }),
}

module.exports = config
