const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


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
            name: "installation",
            message: "Describe how to install your project",
            default: "No instructions given",
        },
        {
            type: "input",
            name: "usage",
            message: "Describe the function of this project",
            default: "No usage info given",
        },
        {
            type: "rawlist",
            name: "license",
            message: "Select license type for your project",
            choices: ["MIT", "Mozilla", "Apache", "GPLv3", "No license"],
            default: "no license",
        },
        {
            type: "input",
            name: "contributing",
            message: "List guidelines for contributors.",
            default: "No guidelines",
        },
        {
            type: "input",
            name: "tests",
            message: "Describe application tests",
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
function writeToFile(answers) {
    
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
