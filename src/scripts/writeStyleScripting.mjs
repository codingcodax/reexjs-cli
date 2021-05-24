import { readFileSync, writeFileSync, unlinkSync } from 'fs';

import runSpawn from '../utils/runSpawn.mjs';
import { installDependencies } from '../constants/commands.mjs';
import { replaceFontFamilySass } from '../utils/replace.mjs';

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

    changeFilesExtension(stylesFileNames, stylesDirectory);
    replaceFileExtension(stylesJavascriptNames, stylesJavascriptDirectory);

    await runSpawn(installDependencies('sass'), null, appDirectory);
};

export default writeStyleScripting;
