module.exports = {
  title: 'HugoCodeStar',
  tagline: 'Où l\'on apprend à coder.',
  url: 'https://HugoCodeStar.github.io/',
  baseUrl: '/site/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'HugoCodeStar', // Usually your GitHub org/user name.
  projectName: 'site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'HugoCodeStar',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        /*{
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },*/
        {
          to: 'docs/inf1035',
          label: 'INF1035',
        },
        {
          to: 'docs/inf1256',
          label: 'INF1256',
        },
        {
          to: 'docs/g25',
          label: 'G25',
        },
        {
          to: 'docs/inf135',
          label: 'INF135',
        },
        {
          to: 'docs/db4',
          label: 'DB4',
        },
        {
          to: 'docs/b07',
          label: 'B07',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
        /*{
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },*/
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Cours',
          items: [
            {
              label: 'INF1035',
              to: 'docs/inf1035'
            },
            {
              label: 'INF1256',
              to: 'docs/inf1256'
            },
            {
              label: 'G25',
              to: 'docs/g25'
            },
            {
              label: 'INF135',
              to: 'docs/inf135'
            },
            {
              label: 'B07',
              to: 'docs/B07'
            },
          ],
        },
        
        /*{
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },*/
        {
          title: 'Communauté',
          items: [
            {
              label: 'Mattermost UQAM',
              href: 'https://mattermost.info.uqam.ca/',
            },
            /*{
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },*/
          ],
        },
        /*{
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hugo Leblanc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/HugoCodeStar/site/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/HugoCodeStar/site/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
