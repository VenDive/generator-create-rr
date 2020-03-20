const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const config = require('./configs');
const fs = require('fs');

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
        default: "react-app"
      },
      {
        type: "input",
        name: "dirName",
        message: "Directory Name: ",
        required: true,
        default: "react-app"
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
            type: "list",
            name: "login",
            message: "Do you need Login Screen?",
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
      }
    }
  }
  writing() {
    const cleanName = (name, replaceWith) => {
      name = name.replace(/\s+/gi, replaceWith); // Replace white space with dash
      return name.replace(/[^a-zA-Z0-9\-]/gi, ''); // Strip any special charactere
    }
    const copyToPath = (file, directory, answers) => {
      console.log(file, directory, answers);
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
    }
    const directory = cleanName(this.answers.dirName, '_');
    mkdirp.sync(directory);
    const answers = {
      app_name: cleanName(this.answers.name, '-'),
      app_version: this.answers.app_version,
      title: this.answers.name,
      year: new Date().getFullYear(),
      ui_library :this.answers.ui_library,
      ui_login: this.ui_library_answers.login,
      private: this.answers.private,
      translation: this.answers.translation,
    }
    config.files.forEach(file => {
      copyToPath(file, directory, answers);
    });
    if (this.answers.translation) {
      this.fs.copy(
        this.templatePath('resources/translationsResources/translations'),
        this.destinationPath(directory+'/src/translations')
      );
    }
    switch (this.answers.ui_library) {
      case config.ui.ant.value: {
        if (this.ui_library_answers.login) {
          config.withLogin.forEach(file => {
            copyToPath(file, directory, answers);
          });
          config.ant_login_files.forEach(file => {
            copyToPath(file, directory, answers);
          });
        }
        break;
      }
      case config.ui.material.value: {
        if (this.ui_library_answers.login) {
          config.withLogin.forEach(file => {
            copyToPath(file, directory, answers);
          });
          config.material_login_files.forEach(file => {
            copyToPath(file, directory, answers);
          });
        }
        break;
      }
    }
  }
  install() {
    const cleanName = (name, replaceWith) => {
      name = name.replace(/\s+/gi, replaceWith); // Replace white space with dash
      return name.replace(/[^a-zA-Z0-9\-]/gi, ''); // Strip any special charactere
    }
    const directory = cleanName(this.answers.dirName, '_');
    var npmdir = process.cwd() + '/' + directory;
    process.chdir(npmdir);
    fs.writeFileSync('.env', `REACT_APP_ENCRYPTION_KEY = 'ee06040416674a04af3ff4f7881b76f2'`);
    this.npmInstall();
    var packages = ['axios', 'crypto-js'];
    if (this.answers.translation) {
      packages.push('i18next@19.3.3');
      packages.push('react-i18next@11.3.3');
    }
    switch (this.answers.ui_library) {
      case config.ui.ant.value: {
        packages.push('antd');
        packages.push('@ant-design/icons');
        break;
      }
      case config.ui.material.value: {
        packages.push('@material-ui/core');
        packages.push('@material-ui/icons');
        break;
      }
    }
    this.npmInstall(packages, { 'save': true });
  }
};

