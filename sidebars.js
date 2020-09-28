

module.exports = {
  someSidebar: {
    Docusaurus: ['doc1', 'doc2', 'doc3'],
    Features: ['mdx'],
  },
  INF1256Sidebar: [
    'inf1256/intro',
    {Cours: Array.from({length: 3}, (v,i) => i + 1).map( v => 'inf1256/cours/cours' + v)},
    {Atelier: Array.from({length: 3}, (v,i) => i + 1).map( v => 'inf1256/atelier/atelier' + v)},
  ],
};
