import chalk from 'chalk';

const name = 'Reexjs CLI';
const repo = 'https://github.com/a12989x/reexjs-cli/issues';

const messages = {
    welcome: `Welcome to ${chalk.bold.magentaBright(
        name
    )}! my custom react cli boilerplate. An interactive CLI automation tool for create react.js and next.js projects most fast and efficiently. ⚛️`,
    walkThrough:
        'This utility will walk you through steps to configure a React.js or Next.js boilerplate as per your requirements.',
    complete: 'Setup is complete! You can check app in',
    thanks: `Thanks for using ${chalk.bold.magentaBright(
        name
    )}. Happy Coding! </>`,
    raiseIssue: `Found an issue? Raise here: ${chalk.bold.green(repo)}`,
};

const features = [
    'React.js/Next.js setup',
    'Folder structure setup',
    'Routing/Pages setup',
    'Installs Dependencies and Dev Dependencies',
];

export { name, messages, features };
