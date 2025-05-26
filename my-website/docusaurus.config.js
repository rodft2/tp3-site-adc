module.exports = {
  title: 'Gestão de Consultas',
  tagline: 'App para marcação de consultas médicas',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'ualg',
  projectName: 'gestao-consultas',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // <-- MOSTRAR a doc na raiz
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};