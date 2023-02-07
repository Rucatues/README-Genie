// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// fs.writeFileSync('./README2.md', 'Kelly');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'Welcome to the README Genie. What would you like the title of your README to be?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What would you like the description of your README to say?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What would you like the installation instructions to say?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What would you like the usage information section to say?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Which license are you using for this project?',
        name: 'license',
        choices: [
            'Apache License',
            'MIT License',
            'BSD License'
        ]
    },
    {
        type: 'input',
        message: 'What would you like to include in the contributing section?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'What is your Github username? We will link your Github in the Questions section.',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address? We will add your email in the Questions section.',
        name: 'email'
    }
]);
// .then(writeToFile);


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     const fileName = `${data.title.toLowerCase().split(" ")} + ".md"`
//     console.log(fileName);
// }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
