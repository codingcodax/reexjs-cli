import inquirer from 'inquirer';
import { validateValue, checkUpper } from '../utils/validate.js';

const questions = [
    {
        type: 'input',
        name: 'appName',
        message: 'Choose the app name:',
        default: 'reexjs-app',
        validate: checkUpper,
    },
    {
        type: 'list',
        name: 'framework',
        message: 'What type of app want?:',
        choices: ['Next.js', 'React.js'],
    },
    {
        type: 'confirm',
        name: 'isRoutingNeeded',
        message: 'Do you need routing?:',
        default: true,
        when: (answers) => answers.framework === 'React.js',
    },
    {
        type: 'input',
        name: 'routes',
        message: 'Enter space separated route names:',
        default: 'home about contact',
        when: (answers) => answers.isRoutingNeeded,
        validate: validateValue,
    },
    {
        type: 'input',
        name: 'pages',
        message: 'Enter space separated page names',
        default: 'home about contact',
        when: (answers) => answers.framework === 'Next.js',
        validate: validateValue,
    },
    {
        type: 'checkbox',
        name: 'predefinedFolders',
        choices: ['assets', 'components', 'utils', 'lib'],
        message: 'Choose from commonly used folders(s):',
    },
    {
        type: 'input',
        name: 'additionalFolders',
        message:
            "Enter space separated additional folder(s) you'd like to have:",
        default: 'context hooks',
        validate: validateValue,
    },
    {
        type: 'list',
        name: 'styleScripting',
        message: 'Choose preferred style scripting:',
        choices: ['SCSS', 'SASS', 'CSS'],
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'Enter space separated required dependencies:',
        default: 'react-bootstrap lodash moment',
    },
    {
        type: 'input',
        name: 'devDependencies',
        message: 'Enter space separated required dev dependencies:',
        default: 'prettier husky lint-staged',
    },
];

const handleSetup = async () => await inquirer.prompt(questions);

export default handleSetup;
