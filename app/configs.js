const config = {
  ui: {
    material: {
      name: "Material UI",
      value: "material"
    },
    ant: {
      name: "Ant Design",
      value: "ant"
    },
    semantic: {
      name: "Semantic UI",
      value: "semantic"
    },
    bootstrap: {
      name: "React Bootstrap",
      value: "bootstrap"
    }
  },
  files: [
    {
      source: 'public',
      destination: 'public',
      isTemplate: false,
    },
    {
      source: 'rewire-eslint',
      destination: 'rewire-eslint',
      isTemplate: false,
    },
    {
      source: 'src',
      destination: 'src',
      isTemplate: false,
    },
    {
      source: 'package.json',
      destination: 'package.json',
      isTemplate: true,
    },
    {
      source: 'public/index.html',
      destination: 'public/index.html',
      isTemplate: true,
    },
    {
      source: 'public/manifest.json',
      destination: 'public/manifest.json',
      isTemplate: true,
    },
    {
      source: 'LICENSE',
      destination: 'LICENSE',
      isTemplate: true,
    },
    {
      source: 'README.md',
      destination: 'README.md',
      isTemplate: true,
    },
    {
      source: 'src/redux/reducers/userReducer.js',
      destination: 'src/redux/reducers/userReducer.js',
      isTemplate: true,
    },
    {
      source: 'src/redux/store/index.js',
      destination: 'src/redux/store/index.js',
      isTemplate: true,
    },
    {
      source: 'src/styles/scss/App.scss',
      destination: 'src/styles/scss/App.scss',
      isTemplate: true,
    },
    {
      source: 'resources/ignored_files/App.css',
      destination: 'src/styles/App.css',
      isTemplate: false,
    },
    {
      source: 'src/routing/App.js',
      destination: 'src/routing/App.js',
      isTemplate: true,
    },
    {
      source: '.eslintrc',
      destination: '.eslintrc',
      isTemplate: false,
    },
    {
      source: '.npmignore',
      destination: '.gitignore',
      isTemplate: false,
    },
    {
      source: 'webpack.config.extend.js',
      destination: 'webpack.config.extend.js',
      isTemplate: false,
    },
    {
      source: 'webpackDevServer.config.extend.js',
      destination: 'webpackDevServer.config.extend.js',
      isTemplate: false,
    },
  ]
};

module.exports = config;
