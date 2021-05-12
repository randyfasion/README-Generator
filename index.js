//include needed packages
const fs = require('fs');
const inquirer = require ('inquirer');
//modules
const questions = require('./utils/questions.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

//write readme file
const writetoFile = (inputuser) => {
fs.writeFile('README.md', inputuser, (error) =>
error ? console.log('error') : console.log('success'));
}

const userPrompt = () => {
    return inquirer.prompt(questions.questions)
}


const start = () => {
    userPrompt()
        .then ((inputuser) => {

            const markdown = generateMarkdown.generateMarkdown(inputuser)

            writetoFile(markdown)
        })
}
start();