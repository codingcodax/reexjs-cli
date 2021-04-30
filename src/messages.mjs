import chalk from 'chalk';

const name = 'Reexjs CLI';
const repo = 'https://github.com/a12989x/reexjs-cli/issues';

const messages = {
    welcome: `Welcome to ${chalk.bold(
        name
    )}! my custom react cli boilerplate. An interactive CLI automation toll for create react projects most fast and efficiently. ⚛️`,
    walkThrough:
        'This utility will walk you through steps to configure a React boilerplate as per your requirements.',
    complete: 'Setup is complete! You can check app in',
    thanks: `Thanks for using ${chalk.bold(name)}. Happy Coding! </>`,
    raiseIssue: `Found an issue? Raise here: ${chalk.green(repo)}`,
};

const features = [
    'Installs Dependencies and Dev Dependencies',
    'Folder structure setup',
    'Routing Setup',
    'Use Context Default Setup',
];

export { name, messages, features };
