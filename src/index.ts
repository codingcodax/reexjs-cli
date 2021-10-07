import { Command } from 'commander';

import { version } from '../package.json';

import { handleInquirerSetup } from './scripts';
import setup from './setup';

const program = new Command();

const init = async () => {
  program
    .version(version)
    .description(
      'An interactive CLI automation tool 🛠️ for creating react.js and next.js projects most fast and efficiently. ⚛️'
    );

  program.parse();

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
    } = await handleInquirerSetup();

    setup(
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
  } catch (err) {
    console.log(err);
  }
};

init();
