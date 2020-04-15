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
const {
  override,<% if (ui_library === 'ant') { %>fixBabelImports, addLessLoader,<% } %>useEslintRc,
} = require('customize-cra-temp');
<% if (ui_library === 'ant') { %>const theme = require('./theme.json');<% } %>

module.exports = override(
<% if (ui_library === 'ant') { %>fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),<% } %>
  useEslintRc(),
<% if (ui_library === 'ant') { %>addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme,
  }, 'react-scripts-rewired'),<% } %>
);
