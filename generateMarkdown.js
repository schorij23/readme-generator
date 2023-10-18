// function to the license Badge Image

function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GPL 3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'Boost 1.0': 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
    'BSD2': 'https://img.shields.io/badge/License-BSD%202--Clause-blue.svg',
    'BSD3': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
    'EPL2.0': 'https://img.shields.io/badge/License-EPL%202.0-red.svg',
  };

  if (licenseBadges[license]) {
    return `![License](${licenseBadges[license]})`;
  } else {
    return '';
  }
}

module.exports = renderLicenseBadge;

// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GPL 3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'Boost 1.0': 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    'BSD2': 'https://img.shields.io/badge/License-BSD_2--Clause-blue.svg',
    'BSD3': 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    'EPL2.0': 'https://img.shields.io/badge/License-EPL%202.0-red.svg',
    'none':'none',
  }; 
  
  if (licenseLinks[license]) {
    return `![License](${licenseLinks[license]})`;
  } else {
    return '';
  }
}
module.exports = renderLicenseLink;

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSections = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GPL 3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'Boost 1.0': 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    'BSD2': 'https://img.shields.io/badge/License-BSD_2--Clause-blue.svg',
    'BSD3': 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    'EPL2.0': 'https://img.shields.io/badge/License-EPL%202.0-red.svg',
  };
  if (licenseSections[license]) {
    return  `![License](${license})`;
  } else {
    return '';
  }
}
module.exports = renderLicenseSection;

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);

  return `
# ${data.title}

## Description
${data.description}

## Table of Contents

* [Installations](#installations)
* [Usage](#usage)

## Installations
${data.installations}

## Usage
${data.usage}

## License
${licenseBadge}

## Contributor
${data.contributors}

## Testing
${data.test}

## Github
${data.github}

## Email
${data.email}
`;
}

module.exports = generateMarkdown;




