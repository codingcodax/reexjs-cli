#!/usr/bin/env node
import { platform } from 'os';
import chalk from 'chalk';
import figlet from 'figlet';

// import packageConfig from '../package.json';
import { name, messages, features } from './messages.mjs';

// import all scripts
import { setup, reexJsCli } from './scripts/index.mjs';

const init = async () => {
	const { thanks, welcome, raiseIssue, walkThrough } = messages;

	const winPlatform = platform() === 'win32';
	const asciiArt = figlet.textSync(name, {
		font: 'ANSI Shadow',
	});

	console.log(`\n${chalk.magentaBright(asciiArt)}`);
	// console.log(chalk.green(`(v${packageConfig.version})\n`));

	//  Greetings
	console.log(`${welcome}\n`);
	features.forEach((value) =>
		console.log(`${chalk.green(winPlatform ? '√' : '✔')} ${value}`)
	);
	console.log(`\n${chalk.cyan(walkThrough)}\n`);

	try {
		const {
			appName,
			framework,
			isRoutingNeeded,
			routes,
			pages,
			predefinedFolders,
			additionalFolders,
			styleScripting,
			dependencies,
			devDependencies,
		} = await setup();

		await reexJsCli(
			appName,
			framework,
			isRoutingNeeded,
			routes,
			pages,
			predefinedFolders,
			additionalFolders,
			styleScripting,
			dependencies,
			devDependencies
		);

		console.log(thanks);
		console.log(`${raiseIssue}\n`);
	} catch (err) {
		console.error(err.message);
	}
};

export default init;
