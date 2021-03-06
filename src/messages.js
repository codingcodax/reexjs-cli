import chalk from 'chalk';

const name = 'Reexjs CLI';
const repo = 'https://github.com/a12989x/reexjs-cli/issues';

const messages = {
	welcome: `Welcome to ${chalk.bold.magentaBright(
		name
	)}! my custom react.js and next.js cli boilerplate. An interactive CLI automation tool for create projects most fast and efficiently. ⚛️`,
	walkThrough:
		'This utility will walk you through steps to configure a React.js or Next.js boilerplate as per your requirements.',
	complete: 'Setup is complete! You can check app in',
	thanks: `Thanks for using ${chalk.bold.magentaBright(
		name
	)}. Happy Coding! </>`,
	raiseIssue: `Found an issue? Raise here: ${chalk.bold.green(repo)}`,
	cliDefault: `${chalk.bold.magentaBright(
		'Usage :'
	)}\n    $ reexjs-cli\n\n${chalk.bold.magentaBright(
		'Options(just one) :'
	)}\n    --isNextJs, -n  Initialize with Next.js default config\n    --isReactVersion, -r  Initialize with Next.js default config\n\n${chalk.bold.magentaBright(
		'Examples :'
	)}\n    See: ${chalk.bold.green(
		'https://github.com/a12989x/reexjs-cli/#examples-'
	)}`,
};

const features = [
	'React.js/Next.js setup',
	'Folder structure setup',
	'Routing/Pages setup',
	'Style scripting setup',
	'Installs Dependencies and Dev Dependencies',
];

export { name, messages, features };
