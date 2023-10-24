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
        default: 'In VS code create an file named .gitignore<br>\nnext include node_modules/ and .DS_Store in .gitignore/<br>\nnext run npm init in the terminal<br>\nnext run npm i for newest inquirer<br>\nthen run node index.js to run the application'
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
        default: 'the npm test command is built in testing'
    },
    {   //GitHub user name
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username'
    },
    {   // email
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    },
    
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err){
        // if there is an error log the error message
        if (err) {
          console.error(err);
        // If the file was saved log the message with the file name
        } else {
          console.log(`README.md was successfully generated to ${fileName}`);
        }
      });
    }

// Function to initialize app
function init() {
    // This uses the inquirer library to prompt the user with questions
    inquirer
    .prompt(questions).then(function(answers) {
        // This logs the answers to the console
        console.log(answers)
      const markdownContent = generateMarkdown(answers);
      writeToFile('assets/README.md', markdownContent);
    })
    .catch((error) => {
      // This log the error to the console  
      console.error(error);
    });
}

// Function call to initialize app
init();




