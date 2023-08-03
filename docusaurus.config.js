// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Prototyping Blog',
  tagline: 'AWS JP Prototyping チームが日々の知見を蓄積するブログです',
  url: 'https://prototyping-blog.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aws-samples', // Usually your GitHub org/user name.
  projectName: 'jp-prototyping-blog', // Usually your repo name.

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          editUrl:
          'https://github.com/aws-samples/jp-prototyping-blog/edit/main/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ['en', 'ja'],
      },
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    metadata: [
      {
        name: 'google-site-verification',
        content: 'QDt4NR8d-V1T7KHp94YVrifTFOIE9dm2b3cRz2rXMrU',
      },
    ],
    navbar: {
      title: 'Prototyping Blog',
      logo: {
        alt: 'Prototyping Blog Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/blog',
          position: 'left',
          label: 'Blog',
        },
        {
          to: '/program',
          position: 'left',
          label: 'Prototyping Program',
        },
        {
          href: 'https://github.com/aws-samples/jp-prototyping-blog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Contents',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Prototyping Program',
              to: '/program',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, Amazon Web Services, Inc. or its affiliates. All rights reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  scripts: [
    isProd ? '/js/rum-prod.js' : '/js/rum-dev.js',
  ],

  plugins: [
    ['./plugins/get-recent-posts', { n: 10 }],
  ],
};

module.exports = config;
