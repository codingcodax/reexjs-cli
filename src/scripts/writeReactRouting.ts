import { mkdirSync, writeFileSync } from 'fs';
import ora from 'ora';

import { WriteReactRouting } from '../../types';

import {
  installDependencies,
  installDevDependencies,
  routesMkdir,
} from '../constants/commands';
import templates from '../templates';
import run from '../utils/run';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

const writeReactRouting: WriteReactRouting = async (
  routes,
  framework,
  appName,
  appDirectory
) => {
  const routesArray = routes
    .split(' ')
    .map((route) => capitalizeFirstLetter(route));

  routesMkdir.args = [
    `${appDirectory}/src/components`,
    `${appDirectory}/src/components/pages`,
  ];

  // initialize spinner
  const spinner = ora('Set up routes...').start();
  spinner.color = 'magenta';

  try {
    // install react-router-dom dependency
    await run(installDependencies, ['react-router-dom'], false, appDirectory);
    if (framework === 'React (TS)')
      await run(
        installDevDependencies,
        ['@types/react-router-dom'],
        false,
        appDirectory
      );

    // create folder components/pages
    mkdirSync(`${appDirectory}/src/components/pages`, { recursive: true });

    // create page components
    routesArray.map((route) => {
      writeFileSync(
        `${appDirectory}/src/components/pages/${route}.js`,
        templates.react.route.replace(/TITLE/g, capitalizeFirstLetter(route))
      );
    });

    // edit App component
    writeFileSync(
      `${appDirectory}/src/App.${framework === 'React' ? 'js' : 'tsx'}`,
      templates.react.app(routesArray)
    );

    spinner.succeed('Routes set up successfully!');
  } catch (err) {
    spinner.fail('Failed to set up routes');
  }
};

export default writeReactRouting;
