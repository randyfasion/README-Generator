const renderLicenseBadge = (license) => {
    let licenseMarkdownText;
    
    switch (license){
        case 'JSON License':
            licenseMarkdownText = '[![License: JSON](https://img.shields.io/badge/License-JSON-red.svg)](https://spdx.org/licenses/JSON.html)';
            break;

        case 'MIT License':
        licenseMarkdownText = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
    }
    return licenseMarkdownText

    }

    const renderLicenseLink = (license) => {

        let licenseLinkURL;

        switch (license) {
            case 'JSON License': 
                licenseLinkURL = 'https://spdx.org/licenses/JSON.html';
                break;

            case 'MIT License':
                licenseLinkURL = 'https://opensource.org/licenses/MIT';
        }
        return licenseLinkURL;
    }

    const generateMarkdown = (data) =>  {
        
        const { name, license, description, installation, usage, contributions, tests, email, questions } = data;
      
        const licenseBadge = renderLicenseBadge(license);
        const licenseLinkURL = renderLicenseLink(license);
        
        return `
        # Project Name:
        ${name}
        ## License
        ${licenseBadge} : [View License](${licenseLinkURL})
        ## Table of Contents
        - [Title](#Project-Name)
        - [License](#License)
        - [Description](#Description)
        - [Installation](#Installation)
        - [Usage](#Usage)
        - [Contributions](#Contributions)
        - [Tests](#Tests)
        - [Questions](#Questions)
        ## Description
        ${description}
        ## Installation
        Navigate to the root directory of this repository and run the following commands to install necessary dependencies:
          ${installation}
        ## Usage
        ${usage}
        ## Contributions 
        ${contributions}
        ## Tests 
        ${tests}
        ## Questions 
        For issues, questions, and comments please contact ${email} or visit [https://github.com/${questions}](https://github.com/${questions}) 
        `
      
      }
      
      //export generateMarkdown function to use in other modules
      module.exports = {
        generateMarkdown: generateMarkdown,
      }