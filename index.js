// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require('node:fs');
const { type } = require("node:os");
const expressValidator = require('express-validator');



// TODO: Create an array of questions for user input
const questions = [
    {
    // Add Github user name for repository
    type: "input",
    name: "githubusername",
    message: "Enter you're github user name",
    validate: expressValidator.check('githubusername').notEmpty().matches(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i),
    },
    {
    // Add Email adress for contact info
    type: "input",
    name: "email",
    message: "Enter you're e-mail address",
    validate: expressValidator.check('email').notEmpty().isEmail(),
    },
    {
    // Add a specific name to your project
    type: "input",
    name: "project name",
    message: "Enter the name for your project",
    },
    {
    //Add a specific description to your project
    type: "input",
    name: "project description",
    message: "Enter your description for you're project",
    },



];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



