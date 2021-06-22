import chalk from 'chalk';

import { messages } from '../messages.mjs';

import {
	installFramework,
	reactRouting,
	nextPages,
	writeFolderStructure,
	writeStyleScripting,
	installAllDependencies,
} from './index.mjs';

const reexJsCli = async (
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
) => {
	const { complete } = messages;

	// cwd for spawn process and app directory where app would be installed
	const cwd = process.cwd();
	const appDirectory = `${cwd}/${appName}`;

	// notify user about the app directory
	console.log(
		`\nSetting up a new ${chalk.bold.green(framework)} app in ${chalk.green(
			appDirectory
		)}\n\nTake a ☕ and relax.\n`
	);

	// Installing framework
	await installFramework(framework, appName, cwd);

	// set up routes if is needed
	if (isRoutingNeeded) await reactRouting(routes, appName, appDirectory);

	// Create pages for the Next.js framework
	if (pages) nextPages(pages, appName, appDirectory);

	// set up folder structure
	if (predefinedFolders.length !== 0 || additionalFolders) {
		await writeFolderStructure(
			framework,
			predefinedFolders,
			additionalFolders,
			appDirectory
		);
	}

	// Set up style preferred scripting
	if (styleScripting !== 'CSS')
		await writeStyleScripting(styleScripting, framework, appDirectory);

	// install dependencies and dev dependencies
	if (dependencies || devDependencies) {
		await installAllDependencies(
			dependencies,
			devDependencies,
			appDirectory
		);
	}

	// ending note
	console.log(`\n${complete} ${chalk.green(appDirectory)}\n`);
	console.log(
		`Please go to ${chalk.bold.green(
			appName
		)} and start your new project!\n`
	);
};

export default reexJsCli;
