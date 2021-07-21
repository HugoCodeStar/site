

module.exports = {
  someSidebar: {
    Docusaurus: ['doc1', 'doc2', 'doc3'],
    Features: ['mdx'],
  },
  INF1256Sidebar: [
    'inf1256/intro',
    {Cours: Array.from({length: 9}, (v,i) => i + 1).map( v => 'inf1256/cours/cours' + v)},
    {Atelier: Array.from({length: 6}, (v,i) => i + 1).concat(9).map( v => 'inf1256/atelier/atelier' + v)},
  ],
  G25Sidebar: [
    'g25/MVP', 'g25/debug', 'g25/log', 'g25/SQLite',
    ],
  INF135Sidebar: [
    'inf135/intro',
    {Cours: Array.from({length: 10}, (v,i) => i + 1).map( v => 'inf135/cours/cours' + v)},
    ],
  DB4Sidebar: [
    'db4/intro',
    {Cours: Array.from({length: 4}, (v,i) => i + 1).map( v => 'db4/cours/cours' + v)},
    {Atelier: Array.from({length: 4}, (v,i) => i + 1).map( v => 'db4/atelier/atelier' + v)},
],
};
