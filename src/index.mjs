#!/usr/bin/env node
import { platform } from 'os';
import chalk from 'chalk';
import figlet from 'figlet';

// import packageConfig from '../package.json';
import { name, messages, features } from './messages.mjs';

// import all scripts
import {
    setup,
    installFramework,
    reactRouting,
    nextPages,
    writeFolderStructure,
    writeStyleScripting,
    installAllDependencies,
} from './scripts/index.mjs';

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
            styleScripting,
            dependencies,
            devDependencies,
        } = await setup();

        // cwd for spawn process and app directory where app would be installed
        const cwd = process.cwd();
        const appDirectory = `${cwd}/${appName}`;

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
        console.log(thanks);
        console.log(`${raiseIssue}\n`);
    } catch (err) {
        console.error(err.message);
    }
};

init();
