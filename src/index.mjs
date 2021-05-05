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
            isUseContextNeeded,
            useContextName,
            predefinedFolders,
            additionalFolders,
            dependencies,
            devDependencies,
        } = await handleSetup();

        // ced for spawn process and directory where app would be installed
        const cwd = process.cwd();
        const directory = `${process.cwd()}/${appName}`;

        // notify user about the directory
        console.log(
            `\nSetting up a new ${chalk.bold(framework)} app in ${chalk.green(
                directory
            )}\n`
        );

        // Installing framework
        await installFramework(framework, appName, cwd);

        // set up routes if is needed
        if (isRoutingNeeded) await reactRouting(routes, appName, directory);

        // Create pages for the Next.js framework
        if (pages) nextPages(pages, appName, directory);

        // set up useContext hook
        // if (isUseContextNeeded) setUpUseContext(framework, useContextName);

        // set up folder structure
        if (predefinedFolders.length !== 0 || additionalFolders)
            await writeFolderStructure(
                framework,
                predefinedFolders,
                additionalFolders,
                appName,
                directory
            );

        // install dependencies and dev dependencies
        if (dependencies || devDependencies)
            await installAllDependencies(
                dependencies,
                devDependencies,
                appName,
                directory
            );

        // ending note
        console.log(`\n${complete} ${chalk.green(directory)}\n`);
        console.log(thanks);
        console.log(`${raiseIssue}\n`);
    } catch (err) {
        console.error(err.message);
    }
};

init();
