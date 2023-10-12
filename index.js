// Include required packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate README content
function generateREADME(answers) {
    // What's the project title
    let content = `# ${answers.title}\n\n`;

    // Descripe your project
    content += `## Description\n${answers.description}\n\n`;

    // Table of Contents
    content += "## Table of Contents\n";
    content += "- [Installation](#installation)\n";
    content += "- [Usage](#usage)\n";
    content += "- [License](#license)\n";
    content += "- [Contributing](#contributing)\n";
    content += "- [Tests](#tests)\n";
    content += "- [Questions](#questions)\n\n";

    // Add installation instructions (how to)
    content += `## Installation\n${answers.installation}\n\n`;

    // Usage information??
    content += `## Usage\n${answers.usage}\n\n`;

    // Project's license type (MIT)
    content += `## License\n${answers.license}\n\n`;

    // Show different Contribute (Lawsuit)
    content += `## Contributing\n${answers.contributing}\n\n`;

    // Describe testing procedures??
    content += `## Tests\n${answers.tests}\n\n`;

    // Provide a section for questions
    content += `## Questions\n${answers.questions}`;

    // GitHub username
    content += `- GitHub: [${answers.github}](https://github.com/${answers.github})\n`;

    // Email (if provided)
    if (answers.email) {
        content += `- Email: ${answers.email}\n`;
    }
    // Return the complete README content
    return content;
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${fileName} has been successfully created!`);
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        // Questions about the project (title, description, etc.)
    ])
    .then((answers) => {
        const readmeContent = generateREADME(answers);
        writeToFile('README.md', readmeContent);
    });
}


// Function call to initialize app
init();



