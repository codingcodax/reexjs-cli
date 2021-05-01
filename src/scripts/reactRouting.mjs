import { writeFileSync } from 'fs';

import { installDependencies, routesMkdir } from '../constants/commands.mjs';
import { pagesTemplate, appJsTemplate } from '../constants/templates.mjs';
import pagesTemplate from '../constants/templates/pagesTemplate.mjs';
import appJsTemplate from '../constants/templates/appJsTemplate';
import runSpawn from '../utils/runSpawn.mjs';

const reactRouting = async (routes, appName, directory) => {
    const routesArray = routes
        .split(' ')
        .map((route) => route.replace(/^\w/, (c) => c.toUpperCase()));

    routesMkdir.args = [
        `${directory}/src/components`,
        `${directory}/src/components/pages`,
    ];

    // create folders (components/pages)
    await runSpawn(routesMkdir, appName, directory);

    // create react pages components
    try {
        const data = routesArray.map((route) => {
            writeFileSync(
                `${directory}/src/components/pages/${route}.js`,
                pagesTemplate(route)
            );
        });
    } catch (err) {
        console.error(err);
    }

    // install react-router-dom dependency
    await runSpawn(installDependencies('react-router-dom'), appName, directory);

    // edit App component
    try {
        const data = writeFileSync(
            `${directory}/src/App.js`,
            appJsTemplate(routesArray)
        );
    } catch (err) {
        console.log(err);
    }
};

export default reactRouting;
