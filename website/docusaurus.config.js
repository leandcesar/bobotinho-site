const users = require('./channels.json');

module.exports = {
  title: 'Bobotinho',
  tagline: 'Seu bot da Twitch',
  organizationName: 'leandcesar',
  projectName: 'bobotinho',
  url: 'https://bobotinho.herokuapp.com',
  baseUrl: '/',
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  scripts: [
    {
      src:
        'https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js',
      defer: true,
    },
    {
      src:
        'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd8ryO5qrZo8Exadq9qmt1wtm4_2FdZGEAKHDFEt_2BBlwwM4.js',
      defer: true,
    },
    {src: 'https://snack.expo.io/embed.js', defer: true},
  ],
  favicon: 'img/favicon.ico',
  titleDelimiter: '|',
  customFields: {
    users,
    facebookAppId: '1677033832619985',
  },
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },
  onBrokenLinks: 'throw',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/facebook/react-native-website/blob/master/website/',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.json'),
        },
        blog: {
          path: 'blog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Todas as postagens',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
          },
        },
        theme: {
          customCss: [
            require.resolve('./src/css/customTheme.scss'),
            require.resolve('./src/css/index.scss'),
            require.resolve('./src/css/channels.scss'),
          ],
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    './sitePlugin',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#20232a',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#20232a',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/pwa/manifest-icon-512.png',
            color: '#06bcee',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#20232a',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    navbar: {
      logo: {
        src: 'img/header_logo.svg',
        alt: 'Bobotinho',
      },
      style: 'dark',
      items: [
        {
          label: 'Comandos',
          to: '/help',
          position: 'left',
        },
        {
          to: '/blog/tags/news',
          label: 'Novidades',
          position: 'left',
        },
        {
          to: '/blog/tags/arts',
          label: 'Artes',
          position: 'left',
        },
        {
          label: 'Documentação',
          type: 'doc',
          docId: 'intro',
          position: 'left',
        },
        {
          href: 'https://discord.gg/6Ue66Vs5eQ',
          'aria-label': 'Servidor do Discord',
          position: 'right',
          className: 'navbar-discord-link',
        },
        {
          href: 'https://twitch.tv/bobotinho',
          'aria-label': 'Canal da Twitch',
          position: 'right',
          className: 'navbar-twitch-link',
        },
        {
          href: 'https://twitter.com/bobotinho',
          'aria-label': 'Perfil do Twitter',
          position: 'right',
          className: 'navbar-twitter-link',
        },
        {
          href: 'https://github.com/leandcesar?tab=repositories&q=bobotinho',
          'aria-label': 'Repositórios do GitHub',
          position: 'right',
          className: 'navbar-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Principal',
          items: [
            {
              label: 'Comandos',
              to: 'help',
            },
            {
              label: 'Novidades',
              to: 'blog/tags/news',
            },
            {
              label: 'Artes',
              to: 'blog/tags/arts',
            },
            {
              label: 'Canais',
              to: 'channels',
            },
          ],
        },
        {
          title: 'Documentação',
          items: [
            {
              label: 'Introdução',
              to: 'docs/intro',
            },
            {
              label: "Dúvidas",
              to: 'docs/faq',
            },
            {
              label: 'Contribuir',
              to: 'docs/contribute',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/6Ue66Vs5eQ',
            },
            {
              label: 'Twitch',
              href: 'https://twitch.tv/bobotinho',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/bobotinho',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/leandcesar?tab=repositories&q=bobotinho',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacidade',
              to: 'privacy',
            },
            {
              label: 'Termos',
              to: 'terms',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bobotinho, Inc. Built with Docusaurus.`,
    },
  },
};
