import { platform } from 'os';
import chalk from 'chalk';
import figlet from 'figlet';

import { name, messages, features } from '../messages.js';

// import default script
import { reexJsCli } from './index.js';

import { getJsonFile } from '../utils/helpers.js';

// import default config json file
const config = getJsonFile('../config.json');

const reexJsCliDefault = async (appName, isNextJs, isReactJs) => {
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
        const framework = isReactJs ? 'React.js' : isNextJs ? 'Next.js' : null;

        const {
            pagesRoutes,
            predefinedFolders,
            additionalFolders,
            styleScripting,
            dependencies,
            devDependencies,
        } = config;
        const isRoutingNeeded = isReactJs ? true : false;
        const routes = isReactJs ? pagesRoutes : null;
        const pages = isNextJs ? pagesRoutes : null;

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

export default reexJsCliDefault;
