const inquirer = require('inquirer');
const fs = require("fs")

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Provide installation instructions for your project:',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide usage instructions for your project:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Provide contribution guidelines for your project:',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Provide test instructions for your project:',
      name: 'testing',
    },
    {
      type: 'list',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache', 'BSD'],
      name: 'license',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ])
  .then(response => {
    const markdown = `
    # ${response.title}

    ## Description
    ${response.description}

    ## Table of Contents 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contributions)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation
    ${response.installation}

    ## License
    [![License: ${response.license}](https://img.shields.io/badge/License-${encodeURIComponent(response.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(response.license)});
    This application is covered under the ${response.license} license.

    ## Contributions
    ${response.contribution}

    ## Tests
    ${response.testing}

    ## Questions
    If you have any questions or issues, feel free to reach out to me on [GitHub](https://github.com/${response.github}) or contact me at ${response.email}.
    `;

    fs.writeFile("README.md", markdown, (err) => 
    err ? console.error(err) : console.log('README.md file created successfully!'
    ));
  }); 