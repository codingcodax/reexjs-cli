#!/usr/bin/env node
import { platform } from 'os';
import chalk from 'chalk';
import figlet from 'figlet';

// import packageConfig from '../package.json';
import { name, messages, features } from './messages.mjs';

import handleSetup from './scripts/setup.mjs';
import installFramework from './scripts/installFramework.mjs';
import reactRouting from './scripts/reactRouting.mjs';
import nextPages from './scripts/nextPages.mjs';
import setUpUseContext from './scripts/setUpUseContext.mjs';
import writeFolderStructure from './scripts/writeFolderStructure.mjs';
import installAllDependencies from './scripts/installAllDependencies.mjs';

const init = async () => {
    const { thanks, welcome, complete, raiseIssue, walkThrough } = messages;

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
            dependencies,
            devDependencies,
        } = await handleSetup();

        // cwd for spawn process and app directory where app would be installed
        const cwd = process.cwd();
        const appDirectory = `${process.cwd()}/${appName}`;

        // notify user about the app directory
        console.log(
            `\nSetting up a new ${chalk.bold.green(
                framework
            )} app in ${chalk.green(appDirectory)}\n\nTake a ☕ and relax.\n`
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
        console.log(thanks);
        console.log(`${raiseIssue}\n`);
    } catch (err) {
        console.error(err.message);
    }
};

init();
