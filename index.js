const inquirer = require('inquirer');
const generateMarkdown = require('./generatemd');
const fs = require('fs');

// writeFileSync

/*
What is your Github username?
What is your email address?
What is your project's name?
Please write a short summary of your project
What kind of license do you want?
What command should be run to install dependencies?
    npm i
What command should be run to run tests?
    npm test
What does the user need to know about using the repo?
What does the user need to know about contributing to the repo?

*/
// How to get backticks ``` accepted?
    // in your templateLiteral function, write \`\`\`
        // back-ticks \ will make whatever you write not follow the JS logic


// https://www.npmjs.com/package/inquirer


const questions = [
    {
        type: 'input',
        name: 'gitName',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project\'s name?'
    },
    {
        type: 'input',
        name: 'summary',
        message: 'Please write a short summary of your project'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What kind of license do you want?'
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'testCommands',
        message: 'What command should be run to run tests?'
    },
    {
        type: 'input',
        name: 'repoBasics',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'constribute',
        message: 'What does the user need to know about contributing to the repo?'
    }

]

function start(){

    inquirer.prompt(questions).then((res) => {        
    writeFiles('automatedREADME.md', generateMarkdown({...res}));
    })
}

// ask questions
// build README
// write the file

function writeFiles(fileName, data) {

    return fs.writeFileSync(fileName, data);
}


start();