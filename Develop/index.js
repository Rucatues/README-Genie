// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'Welcome to the README Genie. What would you like the name of your README to be? We will use this to create the file.',
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
            'Apache',
            'MIT',
            'BSD'
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
])
    .then((data) => {
        writeToFile(data);
        console.log("worked!")
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log('Environment error')
        } else {
            console.log('Something else went wrong')
        }
    });
// TODO: Create a function to write README file
function writeToFile(data) {

    //empty string to push content onto for README
    let contentOfReadMe = [];

    // creating filename
    let fileName = `${data.title.toLowerCase().split(" ")}` + ".md";

    //Title content
    let readMeTitle = ''
    if (data.title == '') {
        readMeTitle = "# TITLE" + "\n"
    } else {
        readMeTitle = "# " + data.title + "\n"
    }
    contentOfReadMe.push(readMeTitle);

    //License badge
    let badge = (license) => {
        switch (license) {
            case 'Apache':
                return `[![License: MIT](https://img.shields.io/badge/License-Apache-yellow.svg)](https://opensource.org/licenses/Apache-2.0)`
            case 'MIT':
                return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
            case 'BSD':
                return `[![License: MPL 2.0](https://img.shields.io/badge/License-BSD-yellow.svg)](https://opensource.org/licenses/BSD-2-Clause)`
            case 'None':
                return "N/A";
        }
    }
    contentOfReadMe.push(badge(data.license));

    //Table of Contents
    let tableOfContents = "\n## Table of Contents\n* [Description](#description)\n* [Installation Instructions](#installation-instructions)\n* [Usage](#usage)\n* [License](#license)\n* [Contributing](#contributing)\n* [Questions](#questions)\n";
    contentOfReadMe.push(tableOfContents);

    //Description content
    let readMeDescription = ''
    if (data.description == '') {
        readMeDescription = "## Description" + "\n";
    } else {
        readMeDescription = "## Description\n\n" + data.description + "\n"
    }
    contentOfReadMe.push(readMeDescription);

    //Installation instructions content
    let readMeInstallation = ''
    if (data.installation == '') {
        readMeInstallation = "## Installation Instructions" + "\n";
    } else {
        readMeInstallation = "## Installation Instructions\n\n" + data.installation + "\n";
    }
    contentOfReadMe.push(readMeInstallation);

    //Usage section
    let readMeUsage = ''
    if (data.installation == '') {
        readMeUsage = "## Usage" + "\n";
    } else {
        readMeUsage = "## Usage\n\n" + data.usage + "\n";
    }
    contentOfReadMe.push(readMeUsage);

    //License section
    let readMeLicense = ''
    if (data.installation == '') {
        readMeLicense = "## License" + "\n";
    } else {
        readMeLicense = "## License\n\n" + data.license + "\n";
    }
    contentOfReadMe.push(readMeLicense);

    //Contributing section
    let readMeContributing = ''
    if (data.installation == '') {
        readMeContributing = "## Contributing" + "\n";
    } else {
        readMeContributing = "## Contributing\n\n" + data.contributing + "\n";
    }
    contentOfReadMe.push(readMeContributing);

    //Contributing section
    let readMeQuestions = ''
    if (data.installation == '') {
        readMeQuestions = "## Contributing" + "\n";
    } else {
        readMeQuestions = "## Questions\n\n" + "[Click here](github.com/" + data.github + ") to go to my Github.\n\n" + "Contact me anytime for questions via email at " + "<" + data.email + ">" + "\n";
    }
    contentOfReadMe.push(readMeQuestions);

    fs.writeFile((`./${fileName}`), contentOfReadMe.toString().replaceAll(',', ' '), err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });
};


    // Function call to initialize app
    // init();
