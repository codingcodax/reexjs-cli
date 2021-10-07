import chalk from 'chalk';

import { Setup } from '../types';

import { messages } from './constants/messages';
import {
  installFramework,
  writeReactRouting,
  createNextPages,
  writeFolderStructure,
  writeStyleScripting,
  installAllDependencies,
} from './scripts';

const setup: Setup = async (
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
  await installFramework(framework, appName);

  // set up routes if is needed for React/React(TS) framework
  if (isRoutingNeeded)
    await writeReactRouting(routes, framework, appName, appDirectory);

  // set up pages for Next/Next(TS) framework
  if (pages) createNextPages(pages, framework, appDirectory);

  // set up folder structure
  if (predefinedFolders.length !== 0 || additionalFolders)
    writeFolderStructure(
      predefinedFolders,
      additionalFolders,
      framework,
      appDirectory
    );

  // set up style preferred scripting
  if (styleScripting !== 'CSS')
    writeStyleScripting(styleScripting, framework, appDirectory);

  // install normal dependencies and dev dependencies
  if (dependencies || devDependencies)
    await installAllDependencies(dependencies, devDependencies, appDirectory);

  // ending note
  console.log(`\n${complete} ${chalk.green(appDirectory)}\n`);
  console.log(
    `Please go to ${chalk.bold.green(appName)} and start your new project!\n`
  );
};

export default setup;
