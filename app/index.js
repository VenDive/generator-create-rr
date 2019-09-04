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
      }
    ]);
    if (this.answers.ui_library !== 'none') {
      if (this.answers.ui_library === 'material') {
        this.ui_library_answers = await this.prompt([
          {
            type: "confirm",
            name: "login",
            message: "Do you need Login Screen",
            default: false,
            required: true
          }
        ]);
      }
    }
  }
  writing() {
    const directory = this.answers.dirName.replace(' ', '_').replace('-', '_').replace('.', '').replace(',', '').replace('&', 'N');
    mkdirp.sync(directory);
    const answers = {
      app_name: this.answers.name.replace(' ', '-').replace('_', '-').replace('.', '').replace(',', ''),
      app_version: this.answers.app_version,
      title: this.answers.name,
      year: new Date().getFullYear(),
      ui_library :this.answers.ui_library,
      ui_login: this.ui_library_answers.login,
      private: this.answers.private
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
    switch (this.answers.ui_library) {
      case config.ui.ant.value: {
        break;
      }
      case config.ui.material.value: {
        if (this.ui_library_answers.login) {
          this.fs.copy(
            this.templatePath('resources/SignIn.js'),
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
    const directory = this.answers.dirName.replace(' ', '_').replace('-', '_').replace('.', '').replace(',', '').replace('&', 'N');
    var npmdir = process.cwd() + '/' + directory;
    process.chdir(npmdir);
    this.npmInstall();
    var packages = ['axios'];
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
