import inquirer, { Answers, QuestionCollection } from 'inquirer';
import { validateValue, checkUpper } from '../utils/validate';

interface WhenAnswer {
  [key: string]: string;
}

const questions: QuestionCollection<Answers> = [
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
    choices: [
      'Next',
      'React',
      new inquirer.Separator(),
      'Next (TS)',
      'React (TS)',
    ],
  },
  {
    type: 'confirm',
    name: 'isRoutingNeeded',
    message: 'Do you need routing?:',
    default: true,
    when: (answers: WhenAnswer) =>
      answers.framework === 'React' || answers.framework === 'React (TS)',
  },
  {
    type: 'input',
    name: 'routes',
    message: 'Enter space separated route names:',
    default: 'home about contact',
    when: (answers: WhenAnswer) => answers.isRoutingNeeded,
    validate: validateValue,
  },
  {
    type: 'input',
    name: 'pages',
    message: 'Enter space separated page names (home is always created):',
    default: 'about contact',
    when: (answers: WhenAnswer) =>
      answers.framework === 'Next' || answers.framework === 'Next (TS)',
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
    message: "Enter space separated additional folder(s) you'd like to have:",
    default: 'context hooks',
    validate: validateValue,
  },
  {
    type: 'list',
    name: 'styleScripting',
    message: 'Choose preferred style scripting:',
    choices: [
      'CSS (default)',
      'SCSS',
      'SASS',
      new inquirer.Separator(),
      'Chakra UI',
      'Tailwind CSS',
    ],
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

const handleInquirerSetup = async (): Promise<Answers> =>
  await inquirer.prompt(questions);

export default handleInquirerSetup;
