import { readFileSync, writeFileSync, unlinkSync } from 'fs';
import ora from 'ora';

import runSpawn from '../utils/runSpawn.js';
import { installDependencies } from '../constants/commands.js';
import { replaceFontFamilySass } from '../utils/replace.js';

const writeStyleScripting = async (styleScripting, framework, appDirectory) => {
    const isNextJs = framework === 'Next.js' ? true : false;
    const stylesFileExtension = styleScripting.toLowerCase();

    const stylesDirectory = isNextJs
        ? `${appDirectory}/styles`
        : `${appDirectory}/src`;
    const stylesFileNames = isNextJs
        ? ['globals', 'Home.module']
        : ['App', 'index'];

    const stylesJavascriptDirectory = isNextJs
        ? `${appDirectory}/pages`
        : `${appDirectory}/src`;
    const stylesJavascriptNames = isNextJs
        ? ['_app', 'index']
        : ['index', 'App'];

    const spinner = ora('Set up style scripting...').start();
    spinner.color = 'magenta';

    const changeFilesExtension = (files, directory) => {
        files.map((file) => {
            const data = readFileSync(`${directory}/${file}.css`, 'utf8');

            writeFileSync(
                `${directory}/${file}.${stylesFileExtension}`,
                styleScripting === 'SASS'
                    ? replaceFontFamilySass(data, isNextJs)
                    : data
            );

            unlinkSync(`${directory}/${file}.css`);
        });
    };

    const replaceFileExtension = (files, directory) => {
        files.map((file) => {
            const data = readFileSync(`${directory}/${file}.js`, 'utf8');

            writeFileSync(
                `${directory}/${file}.js`,
                data.replace(/css/g, stylesFileExtension)
            );
        });
    };

    try {
        changeFilesExtension(stylesFileNames, stylesDirectory);
        replaceFileExtension(stylesJavascriptNames, stylesJavascriptDirectory);

        await runSpawn(installDependencies('sass'), null, appDirectory, false);

        spinner.succeed('Style scripting set up successfully!');
    } catch (err) {
        spinner.fail('Failed to set up style scripting');
    }
};

export default writeStyleScripting;
