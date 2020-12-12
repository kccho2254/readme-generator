function generateREADME({
    // maybe change from object destruction to res, res.projectName, res.summary etc..

    projectName,
    summary,
    dependencies,
    testCommands,
    repoBasics,
    constribute,
    license,
    gitName,
    email
}) {
return `
# ${projectName} 

## Description
    ${summary}  

## Installation

Dependencies needed for installation:

${dependencies}
## Test Commands

${testCommands}  
## Basics
    
Instructions for using the repo:

${repoBasics}

## Contributing

Instructions for how to contribute to this repo:

${constribute}

## License
${license}

## About

${gitName}

${email}
`
}

module.exports = generateREADME;
