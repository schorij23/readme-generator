// This creates a license badge based on the provided license type
function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GPL 3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'Boost 1.0': 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
    'BSD2': 'https://img.shields.io/badge/License-BSD%202--Clause-blue.svg',
    'BSD3': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
    'EPL2.0': 'https://img.shields.io/badge/License-EPL%202.0-red.svg',
    'None': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
  };

  if (licenseBadges[license]) {
    return `![License](${licenseBadges[license]})`;
  } else {
    return '';
  }
}
// Export the renderLicenseBadge function to use in other files
module.exports = renderLicenseBadge;

// This creates a license link based on the provided license type
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://choosealicense.com/licenses/mit/',
    'Apache 2.0': 'https://choosealicense.com/licenses/apache-2.0/',
    'GPL 3.0': 'https://choosealicense.com/licenses/gpl-3.0/',
    'Boost 1.0': 'https://choosealicense.com/licenses/bsl-1.0/',
    'BSD2': 'https://choosealicense.com/licenses/bsd-2-clause/',
    'BSD3': 'https://choosealicense.com/licenses/bsd-3-clause/',
    'EPL2.0': 'https://choosealicense.com/licenses/epl-2.0/',
    'None' : 'https://choosealicense.com/licenses/unlicense/',
  };
  if (licenseLinks[license]) {
    return `For more details, see [License Details](${licenseLinks[license]})`;
  } else {
    return '';
  }
}
// Export the renderLicenseLink function to use in other files
module.exports = renderLicenseLink;

// This creates a license section based on the provided license type
function renderLicenseSection(license) {
  const licenseSections = {
    'MIT': 'The project is licensed by the MIT License.',
    'Apache 2.0': 'The project is licensed by the Apache License 2.0.',
    'GPL 3.0': 'The project is licensed by the GNU General Public License v3.0/',
    'Boost 1.0': 'The project is licensed by theBoost Software License 1.0/',
    'BSD2': 'The project is licensed by the BSD 2-Clause “Simplified” License',
    'BSD3': 'The project is licensed by the BSD 3-Clause “New” or “Revised” License',
    'EPL2.0': 'The project is licensed by the Eclipse Public License 2.0',
    'None' : 'The project license has no conditions whatsover'
  };
  if (licenseSections[license]) {
    return `\n## License\n${licenseSections[license]}`;
  } else {
    return '';
  }
}
// Export the renderLicenseSection function to use in other files
module.exports = renderLicenseSection;


function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
// Return a README markdown based on the provided data and license information
  return `
# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents

* [Installations](#installations)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)

## Installations
${data.installations}

## Usage
${data.usage}


${licenseSection}

${licenseLink}

## Contributors
${data.contributors}

## Testing
${data.tests}

## Questions

  This is my contact information if there are any questions

  - GitHub user name ${data.github}
  - Gmail address ${data.email}
`;
}
// Export the generateMarkdown function to use in other files
module.exports = generateMarkdown;




