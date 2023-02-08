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

    fs.writeFile((`./${fileName}`), contentOfReadMe.toString().replaceAll(',', ' '), err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });
};

    // console.log("### " + data.title + "\n");
    // console.log("## Description\n\n" + data.description + "\n");
    // console.log("## Installation Instructions\n\n" + data.installation + "\n");
    // console.log("## Usage Information\n\n" + data.usage + "\n");
    // console.log("## License\n\n" + data.license + "\n");
    // console.log("## Contributing\n\n" + data.contributing + "\n");
    // console.log("## Questions\n\n" + "[Click here](github.com/" + data.github + ") to go to my Github.\n\n" + "Contact me anytime for questions via my email at " + "<" + data.email + ">" + "\n");


    // Function call to initialize app
    // init();
