// Include required packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./generateMarkdown");

//  array of questions for user input
const questions = [
        
        // Project Title
    {   type : "input",
        name : "project title",
        message : "Enter the name of the Project"

    },
    {   // Project Description
        type: "input",
        name: "description",
        message: "Enter a description of the project:"
    },
    {   // Table of Contents???
        type: "input",
        name: "table of contents ???"

    },
    {   // Installations - dependancies???, how to guide???
        type: "input",
        name: "installations",
        message: ""
    },
    {   // Usage ???
        type: "input",
        name: "usage",
        message: ""
    },
    {   // Create a License with more than on option
        type: "list",
        name: "license",
        message: "What types license should be used?",
        choices: ["MIT","GLP3.0","APACHE2.0","Boost1.0","BSD2","BSD3","EPL2.0","MPL-2.0","None"]
    },
    {   // Contribution Guidelines (avoid lawsuit??)
        type: "input",
        name: "contributors",
        message: "Who contributed to the project?"
    },
    {   // Test Instructions ???
        type: "input",
        name: "test",
        message: "Instructions to run tests???"
    },
    {
    
        type: "input",
        name: "github",
        message: "Enter your GitHub username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address"
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`README.md has been generated successfully as ${fileName}`);
        }
      });
    }


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then((answers) => {
      const markdownContent = generateMarkdown(answers);
      writeToFile('README.md', markdownContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function(err) {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log(`${fileName} has been successfully created!`);
//       }
//     });
//   }
  


// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt([
//         // Questions about the project (title, description, license)
//     ])
//     .then((answers) => {
//         const readmeContent = generateREADME(answers);
//         writeToFile('README.md', readmeContent);
//     });
// }


// // Function call to initialize app
// init();


// // Function to generate README content
// function generateREADME(answers) {
//     // What's the project title
//     let content = `# ${answers.title}\n\n`;

//     // Descripe your project
//     content += `## Description\n${answers.description}\n\n`;

//     // Table of Contents
//     content += "## Table of Contents\n";
//     content += "- [Installation](#installation)\n";
//     content += "- [Usage](#usage)\n";
//     content += "- [License](#license)\n";
//     content += "- [Contributing](#contributing)\n";
//     content += "- [Tests](#tests)\n";
//     content += "- [Questions](#questions)\n\n";

//     // Add installation instructions (how to)
//     content += `## Installation\n${answers.installation}\n\n`;

//     // Usage information??
//     content += `## Usage\n${answers.usage}\n\n`;

//     // Project's license type (MIT)
//     content += `## License\n${answers.license}\n\n`;

//     // Show different Contribute (Lawsuit)
//     content += `## Contributing\n${answers.contributing}\n\n`;

//     // Describe testing procedures??
//     content += `## Tests\n${answers.tests}\n\n`;

//     // Provide a section for questions
//     content += `## Questions\n${answers.questions}`;

//     // GitHub username
//     content += `- GitHub: [${answers.github}](https://github.com/${answers.github})\n`;

//     // Email (if provided)
//     if (answers.email) {
//         content += `- Email: ${answers.email}\n`;
//     }
//     // Return the complete README content
//     return content;
// }




