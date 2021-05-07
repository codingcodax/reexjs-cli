import { mkdirSync, writeFileSync } from 'fs';

import { installDependencies, routesMkdir } from '../constants/commands.mjs';
import pagesTemplate from '../constants/templates/pagesTemplate.mjs';
import appJsTemplate from '../constants/templates/appJsTemplate.mjs';
import runSpawn from '../utils/runSpawn.mjs';
import { capitalizeFirstLetter } from '../utils/helpers.mjs';

const reactRouting = async (routes, appName, appDirectory) => {
    const routesArray = routes
        .split(' ')
        .map((route) => capitalizeFirstLetter(route));

    routesMkdir.args = [
        `${appDirectory}/src/components`,
        `${appDirectory}/src/components/pages`,
    ];

    // create folders (components/pages)
    mkdirSync(
        `${appDirectory}/src/components/pages`,
        { recursive: true },
        (err) => {
            if (err) throw err;
        }
    );

    // create react pages components
    try {
        const data = routesArray.map((route) => {
            writeFileSync(
                `${appDirectory}/src/components/pages/${route}.js`,
                pagesTemplate(route)
            );
        });
    } catch (err) {
        console.error(err);
    }

    // install react-router-dom dependency
    await runSpawn(installDependencies('react-router-dom'), null, appDirectory);

    // edit App component
    try {
        const data = writeFileSync(
            `${appDirectory}/src/App.js`,
            appJsTemplate(routesArray)
        );
    } catch (err) {
        console.log(err);
    }
};

export default reactRouting;
