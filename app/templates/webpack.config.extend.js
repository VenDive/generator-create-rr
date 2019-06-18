/**
 * Project's customized Webpack Configuration Extension
 * ----------------------------------------------------
 *
 * this file is heavily inspired by `react-app-rewired` mechanism.
 *
 * it simply gives you the chance to hook into the default Webpack
 * configuration as it is provided by `create-react-app`, and to
 * change it so to match your project's needs.
 *
 * If you want to check out the default values look into:
 * `./node_modules/marcopeg-react-scripts/config/webpack.config.${env}.js`
 *
 */
const rewireEslint = require('./rewire-eslint');

module.exports = (webpackConfig) => {
  // here you can extend your webpackConfig at will
  let config = webpackConfig;
  config = rewireEslint(config);
  return config;
};
