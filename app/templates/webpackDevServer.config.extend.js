/**
 * Project's customized Webpack DevServer Configuration Extension
 * --------------------------------------------------------------
 *
 * this file is heavily inspired by `react-app-rewired` mechanism.
 *
 * it simply gives you the chance to hook into the default Webpack
 * DevServer configuration as it is provided by `create-react-app`,
 * and to change it so to match your project's needs.
 *
 * If you want to check out the default values look into:
 * `./node_modules/marcopeg-react-scripts/config/webpackDevServer.config.js`
 *
 */
// const rewireEslint = require('./rewire-eslint');

module.exports = (webpackDevServerConfig) => {
  // here you can extend your webpackDevServerConfig at will
  const config = webpackDevServerConfig;
  // config = rewireEslint(config);
  return config;
};
