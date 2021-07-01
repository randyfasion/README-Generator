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