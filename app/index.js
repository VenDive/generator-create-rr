var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
var config = require('./configs');


module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }

  async initializing() {
    this.pkg = require('../package.json');
  }

  async prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('React Redux App') + ' boilerplate generator!'
    ));
    this.ui_library_answers = {}; 
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Project name: ",
        required: true,
      },
      {
        type: "input",
        name: "dirName",
        message: "Directory Name: ",
        required: true,
      },
      {
        type: "input",
        name: "description",
        message: "Project Description",
        default: ""
      },
      {
        type: "input",
        name: "app_version",
        message: "Application version? e.g 0.1.0",
        default: "0.1.0"
      },
      {
        type: "confirm",
        name: "private",
        message: "Is this repo private?(private repo won't be able to npm publish)",
        default: false
      },
      {
        type: "list",
        name: "ui_library",
        message: "Which UI Library you want to use?",
        choices: [
          {
            name: "None",
            value: "none"
          },
          ...Object.values(config.ui),
        ],
        required: true
      },
      {
        type: "list",
        name: "translation",
        message: "Do you want MultiLanguage Translation Settings?",
        choices: [
          {
            name: "Yes",
            value: true
          },
          {
            name: "No",
            value: false
          },
        ],
        required: true
      }
    ]);
    if (this.answers.ui_library !== 'none') {
      if (this.answers.ui_library === config.ui.material.value || this.answers.ui_library === config.ui.ant.value) {
        this.ui_library_answers = await this.prompt([
          {
            type: "confirm",
            name: "login",
            message: "Do you need Login Screen?",
            default: false,
            required: true
          }
        ]);
      }
    }
  }
  writing() {
    const directory = this.answers.dirName.replace(/ /g, '_').replace(/-/g, '_').replace(/\./g, '').replace(/,/g, '').replace(/&/g, 'N');
    mkdirp.sync(directory);
    const answers = {
      app_name: this.answers.name.replace(/ /g, '-').replace(/_/g, '-').replace(/\./g, '').replace(/,/g, ''),
      app_version: this.answers.app_version,
      title: this.answers.name,
      year: new Date().getFullYear(),
      ui_library :this.answers.ui_library,
      ui_login: this.ui_library_answers.login,
      private: this.answers.private,
      transaltion: this.answers.translation,
    }
    config.files.forEach(file => {
      if (file.isTemplate) {
        this.fs.copyTpl(
          this.templatePath(file.source),
          this.destinationPath(directory+ '/' + file.destination),
          answers
        );
      } else {
        this.fs.copy(
          this.templatePath(file.source),
          this.destinationPath(directory+ '/' + file.destination),
        );
      }
    });
    if (this.answers.translation) {
      this.fs.copy(
        this.templatePath('resources/translationsResources/translations'),
        this.destinationPath(directory+'/src/translations')
      );
      this.fs.copy(
        this.templatePath('resources/translationsResources/UserDetails.js'),
        this.destinationPath(directory+'/src/components/UserDetails.js')
      );
    }
    switch (this.answers.ui_library) {
      case config.ui.ant.value: {
        if (this.ui_library_answers.login) {
          if (this.answers.translation) {
            this.fs.copy(
              this.templatePath('resources/ant/login/components/LoginWithTranslation.js'),
              this.destinationPath(directory+'/src/components/login/Login.js')
            );
          } else {
            this.fs.copy(
              this.templatePath('resources/ant/login/components/Login.js'),
              this.destinationPath(directory+'/src/components/login/Login.js')
            );
          }
          this.fs.copy(
            this.templatePath('resources/ant/login/containers/loginContainer.js'),
            this.destinationPath(directory+'/src/containers/loginContainer.js')
          );
          this.fs.copy(
            this.templatePath('resources/ant/login/actions/loginActions.js'),
            this.destinationPath(directory+'/src/redux/actions/loginActions.js')
          );
          this.fs.copy(
            this.templatePath('resources/ant/login/actions/index.js'),
            this.destinationPath(directory+'/src/redux/actions/index.js')
          );
          this.fs.copy(
            this.templatePath('resources/ant/login/reducers/authReducer.js'),
            this.destinationPath(directory+'/src/redux/reducers/authReducer.js')
          );
          this.fs.copy(
            this.templatePath('resources/ant/login/reducers/rootReducer.js'),
            this.destinationPath(directory+'/src/redux/reducers/rootReducer.js')
          );
          this.fs.copy(
            this.templatePath('resources/ant/login/style/login.scss'),
            this.destinationPath(directory+'/src/styles/scss/main/login.scss')
          );
          this.fs.copy(
            this.templatePath('resources/ant/login/configs/constants.js'),
            this.destinationPath(directory+'/src/configs/constants.js')
          );
          this.fs.copy(
            this.templatePath('resources/ant/login/configs/messages.js'),
            this.destinationPath(directory+'/src/configs/messages.js')
          );
        }
        break;
      }
      case config.ui.material.value: {
        if (this.ui_library_answers.login) {
          this.fs.copy(
            this.templatePath('resources/material/SignIn.js'),
            this.destinationPath(directory+'/src/components/SignIn.js')
          );
        }
        break;
      }
      case config.ui.semantic.value: {
        break;
      }
      case config.ui.bootstrap.value: {
        break;
      }
    }
  }
  install() {
    const directory = this.answers.dirName.replace(/ /g, '_').replace(/-/g, '_').replace(/\./g, '').replace(/,/g, '').replace(/&/g, 'N');
    var npmdir = process.cwd() + '/' + directory;
    process.chdir(npmdir);
    this.npmInstall();
    var packages = ['axios', 'crypto-js'];
    if (this.answers.translation) {
      packages.push('i18next@17.0.13');
      packages.push('react-i18next@10.12.2');
    }
    switch (this.answers.ui_library) {
      case config.ui.ant.value: {
        packages.push('antd');
        break;
      }
      case config.ui.material.value: {
        packages.push('@material-ui/core');
        packages.push('@material-ui/icons');
        break;
      }
      case config.ui.semantic.value: {
        packages.push('semantic-ui-react');
        break;
      }
      case config.ui.bootstrap.value: {
        packages.push('bootstrap');
        packages.push('react-bootstrap');
        break;
      }
    }
    this.npmInstall(packages, { 'save': true });
  }
};
