const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);


// array of questions for user
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Please name your project:",
            default: "title",
        },
        {
            type: "input", 
            name: "description",
            message: "Describe your project",
            default: "No description given",
        },
        {
            type: "input",
            name: "usage",
            message: "Describe the function of this project",
            default: "No usage info given",
        },
        {
            type: "input",
            name: "installation",
            message: "Describe how to install your project",
            default: "No instructions given",
        },
        {
            type: "rawlist",
            name: "license",
            message: "Select license type for your project",
            choices: ["GNU General Public", "Mozilla", "Apache", "MIT", "No license"],
            default: "no license",
        },
        {
            type: "input",
            name: "contributing",
            message: "List contribution guidelines",
            default: "No guidelines",
        },
        {
            type: "input",
            name: "tests",
            message: "Describe application tests that have been run so far",
            default: "Nothing described",
        },
        {
            type: "input",
            name: "questions",
            message: "Enter your Github username",
        },
    ]);
}

// function to write README file
function generateREADME(answers) {
    return `
  ${
    answers.license === "GNU General Public"
      ? "![](https://img.shields.io/badge/License-GPLv3-blue.svg)"
      : ""
  }
  ${
    answers.license === "Mozilla"
      ? "![](https://img.shields.io/badge/license-Mozilla-blue)"
      : ""
  }
  ${
    answers.license === "Boost"
      ? "![](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)"
      : ""
  }
  ${
    answers.license === "MIT"
      ? "![](https://img.shields.io/badge/License-MIT-yellow.svg)"
      : ""
  }
  ${
    answers.license === "none"
      ? "![](https://img.shields.io/badge/license-none-inactive)"
      : ""
  }

# ${answers.title}

## Table of Contents:

*[Description](#description)
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributing](#contributing)
*[Tests](#tests)
*[Questions](#questions)


---

## Description:
${answers.description}

## Installation:
${answers.installation}

## Usage:
${answers.usage}

## License:
${
    answers.license === "GNU General Public"
      ? "GNU GPLv3: Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights."
      : ""
}
${
    answers.license === "Mozilla"
      ? "Mozilla Public License 2.0: Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work."
      : ""

    
}
${
    answers.license === "Boost"
      ? "Boost Software License 1.0: A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
      : ""
}
${
    answers.license === "MIT"
      ? "MIT License: A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
      : ""
}
    
${
    answers.license === "none"
      ? "No license: When you make a creative work (which includes code), the work is under exclusive copyright by default. Unless you include a license that specifies otherwise, nobody else can copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation. Once the work has other contributors (each a copyright holder), “nobody” starts including you."
      : ""
}


## Contributing 
${answers.contributing}
## Tests
${answers.tests}
## Questions
Github Profile: <https://github.com/${answers.questions}> <br> 
Email: <${answers.email}>
 `;
}

// function to initialize program
async function init() {
    try {
        const answers = await promptUser();
        await writeFileAsync("README.md", generateREADME(answers));
    } catch (err) {
        console.log("ERR", err);
    }
}

// function call to initialize program
init();
