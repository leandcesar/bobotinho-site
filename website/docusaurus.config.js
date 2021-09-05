const channels = require('./channels.json');
const sponsors = require('./sponsors.json');

module.exports = {
  title: 'Bobotinho',
  tagline: 'Seu bot da Twitch',
  organizationName: 'leandcesar',
  projectName: 'bobotinho',
  url: 'https://bobotinho.vercel.app',
  baseUrl: '/',
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  scripts: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      "data-ad-client": "ca-pub-9086444938175463",
      async: true
    }
  ],
  favicon: 'img/favicon.ico',
  titleDelimiter: '|',
  customFields: {
    channels,
    sponsors
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
          showLastUpdateTime: false,
          editUrl: 'https://github.com/leandcesar/bobotinho-site/tree/main/',
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
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
    // './sitePlugin',
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
      style: 'primary',
      items: [
        {
          label: 'Comandos',
          type: 'doc',
          docId: 'help',
          position: 'left',
        },
        {
          label: 'Status',
          to: 'https://stats.uptimerobot.com/EQQpJSWDE5',
          position: 'left',
        },
        // {
        //   to: '/donate',
        //   label: 'Apoiar',
        //   position: 'left',
        // },
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
              to: 'docs/help',
            },
            {
              label: 'Status',
              to: 'https://stats.uptimerobot.com/EQQpJSWDE5',
            },
            // {
            //   label: 'Apoiar',
            //   to: 'donate',
            // },
          ],
        },
        {
          title: 'Outros',
          items: [
            {
              label: 'Canais',
              to: 'channels',
            },
            {
              label: "Apoiadores",
              to: 'sponsors',
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
