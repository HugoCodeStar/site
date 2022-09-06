

module.exports = {
  someSidebar: {
    Docusaurus: ['doc1', 'doc2', 'doc3'],
    Features: ['mdx'],
  },
  B07Sidebar: [
    {
      type: 'autogenerated',
      dirName: 'b07',
    }
  ],
  INF1035Sidebar: [
    {
      type: 'autogenerated',
      dirName: 'inf1035',
    }
  ],
  INF1256Sidebar: [
    {
      type: 'autogenerated',
      dirName: 'inf1256',
    }
  ],
  G25Sidebar: [
    'g25/MVP', 'g25/debug', 'g25/log', 'g25/SQLite',
    ],
  INF135Sidebar: [
    {
      type: 'autogenerated',
      dirName: 'inf135',
    }
  ],
  INF5111Sidebar: [
    {
      type: 'autogenerated',
      dirName: 'inf5111',
    }
  ],
/*   INF135Sidebar: [
    'inf135/intro',
    {Cours: Array.from({length: 10}, (v,i) => i + 1).map( v => 'inf135/cours/cours' + v)},
    ], */
  DB4Sidebar: [
    'db4/intro',
    {Cours: Array.from({length: 4}, (v,i) => i + 1).map( v => 'db4/cours/cours' + v)},
    {Atelier: Array.from({length: 4}, (v,i) => i + 1).map( v => 'db4/atelier/atelier' + v)},
],
};
