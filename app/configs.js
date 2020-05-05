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
  },
  files: [
    {
      source: 'public',
      destination: 'public',
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
      source: 'src/styles/App.scss',
      destination: 'src/styles/App.scss',
      isTemplate: true,
    },
    {
      source: 'resources/ignored_files/App.css',
      destination: 'src/styles/App.css',
      isTemplate: false,
    },
    {
      source: '.eslintrc',
      destination: '.eslintrc',
      isTemplate: false,
    },
    {
      source: 'bitbucket-pipelines.yml',
      destination: 'bitbucket-pipelines.yml',
      isTemplate: false,
    },
    {
      source: 'jest.config.js',
      destination: 'jest.config.js',
      isTemplate: false,
    },
    {
      source: 'jsconfig.json',
      destination: 'jsconfig.json',
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
      isTemplate: true,
    },
    {
      source: 'webpackDevServer.config.extend.js',
      destination: 'webpackDevServer.config.extend.js',
      isTemplate: false,
    },
    {
      source: '.prettierrc',
      destination: '.prettierrc',
      isTemplate: false,
    },
  ],
  withLogin:[
    {
      source: 'resources/withLogin/modules/ForgotPassword',
      destination: '/src/app/modules/ForgotPassword',
      isTemplate: false,
    },
    {
      source: 'resources/withLogin/modules/Login',
      destination: '/src/app/modules/Login',
      isTemplate: false,
    },
    {
      source: 'resources/withLogin/pages/ForgotPassword',
      destination: '/src/app/pages/ForgotPassword',
      isTemplate: false,
    },
    {
      source: 'resources/withLogin/pages/Login',
      destination: '/src/app/pages/Login',
      isTemplate: false,
    },
    {
      source: 'resources/withLogin/pages/Dashboard',
      destination: '/src/app/pages/Dashboard',
      isTemplate: false,
    },
    {
      source: 'resources/withLogin/reducer/rootReducer.js',
      destination: '/src/store/rootReducer.js',
      isTemplate: false,
    },
    {
      source: 'resources/withLogin/routing/Pages.js',
      destination: '/src/routing/Pages.js',
      isTemplate: false,
    },
    {
      source: 'resources/withLogin/modules/ForgotPassword/__tests__/forgot_password.test.js',
      destination: '/src/app/modules/ForgotPassword/__tests__/forgot_password.test.js',
      isTemplate: true,
    },
    {
      source: 'resources/withLogin/modules/Login/__tests__/login.test.js',
      destination: '/src/app/modules/Login/__tests__/login.test.js',
      isTemplate: true,
    },
  ],
  ant_files: [
    {
      source: 'resources/ant/theme.json',
      destination: 'theme.json',
      isTemplate: false,
    }
  ],
  ant_login_files: [
    {
      source: 'resources/ant/atoms/Button',
      destination: '/src/app/atoms/Button',
      isTemplate: false,
    },
    {
      source: 'resources/ant/atoms/Input',
      destination: '/src/app/atoms/Input',
      isTemplate: false,
    },
    {
      source: 'resources/ant/atoms/index.js',
      destination: '/src/app/atoms/index.js',
      isTemplate: false,
    },
    {
      source: 'resources/ant/modules/Login/Login.js',
      destination: '/src/app/modules/Login/Login.js',
      isTemplate: false,
    },
    {
      source: 'resources/ant/modules/ForgotPassword/ForgotPassword.js',
      destination: '/src/app/modules/ForgotPassword/ForgotPassword.js',
      isTemplate: false,
    },
  ],
  material_login_files :[
    {
      source: 'resources/material/atoms/Button',
      destination: '/src/app/atoms/Button',
      isTemplate: false,
    },
    {
      source: 'resources/material/atoms/Input',
      destination: '/src/app/atoms/Input',
      isTemplate: false,
    },
    {
      source: 'resources/material/atoms/index.js',
      destination: '/src/app/atoms/index.js',
      isTemplate: false,
    },
    {
      source: 'resources/material/modules/Login/Login.js',
      destination: '/src/app/modules/Login/Login.js',
      isTemplate: false,
    },
    {
      source: 'resources/material/modules/ForgotPassword/ForgotPassword.js',
      destination: '/src/app/modules/ForgotPassword/ForgotPassword.js',
      isTemplate: false,
    },
  ],
};

module.exports = config;
