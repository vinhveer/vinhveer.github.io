import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vinh Veer',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://vinhveer.github.io',
  baseUrl: '/',

  organizationName: 'vinhveer',
  projectName: 'vinhveer.github.io',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          path: 'blog',
          routeBasePath: 'blog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          postsPerPage: 5,
          include: ['*.md', '*.mdx'],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Vinh Veer',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'http://ec2-50-17-60-120.compute-1.amazonaws.com/',
            label: 'E-Learning',
            position: 'right',
          },
          {
            href: 'https://github.com/vinhveer',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/vinhveer',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vinh Veer.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;