module.exports = {
  title: 'React Native Cli Hold Menu',
  tagline:
    'A performant, easy to use hold to open context menu for React Native Cli',
  url: 'https://commencement-technology.github.io',
  baseUrl: '/react-native-cli-hold-menu/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Commencement Technology',
  projectName: 'react-native-cli-hold-menu',
  themeConfig: {
    twitterImage: 'img/og.png',
    image: 'img/og.png',
    navbar: {
      title: 'React Native Cli Hold Menu',
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/Commencement-Technology/react-native-cli-hold-menu',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
