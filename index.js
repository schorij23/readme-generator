// Include required packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./generateMarkdown');

//  array of questions for user input
const questions = [
        
        // Project Title
    {   type : 'input',
        name : 'title',
        message : 'Enter the name of the Project'

    },
    {   // Project Description
        type: 'input',
        name: 'description',
        message: 'Enter a short Description to explain the project:'
    },
 
    {   // Installation
        type: 'input',
        name: 'installations',
        message: 'How do you install this program',
        default: 'In VS code create an file named .gitignore<br>\nnext include node_modules/ and .DS_Store in .gitignore/<br>\nnext run npm init in the terminal<br>\nnext run npm i inquirer@8.2.4<br>\nthen run node index.js to run the application'
    },
    {   // Usage
        type: 'input',
        name: 'usage',
        message: 'How will this application be used'
    },
    {   // Create a License with more than on option
        type: 'list',
        name: 'license',
        message: 'What types license should be used?',
        choices: ['MIT','Apache 2.0','GPL 3.0','Boost 1.0','BSD2','BSD3','EPL2.0','None']
    },
    {   // Contribution Guidelines
        type: 'input',
        name: 'contributors',
        message: 'What are the names of the contributers to this project?'
    },
    {   // Test Instructions
        type: 'input',
        name: 'tests',
        message: 'What tests will you run for this application?',
        default: 'npm test Will run all unit tests in inquirer'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err){
        if (err) {
          console.error(err);
        } else {
          console.log(`README.md was successfully as ${fileName}`);
        }
      });
    }

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then(function(answers) {
        console.log(answers)
      const markdownContent = generateMarkdown(answers);
      writeToFile('READMEGENERATED.md', markdownContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();




