import meow from 'meow';

import { messages } from './messages.js';
import reexJsCli from './index.js';
import { reexJsCliDefault } from './scripts/index.js';

const cli = meow(`${messages.cliDefault}`, {
    importMeta: import.meta,
    flags: {
        isNextJs: { type: 'boolean', alias: 'n', default: false },
        isReactJs: { type: 'boolean', alias: 'r', default: false },
    },
});

const init = async () => {
    const appName = cli.input[0];
    const { isNextJs, isReactJs } = cli.flags;

    if (!appName && !isNextJs && !isReactJs) reexJsCli();
    else if (appName && isNextJs && isReactJs) cli.showHelp();
    else if ((appName && isNextJs) || (appName && isReactJs))
        reexJsCliDefault(appName, isNextJs, isReactJs);
    else cli.showHelp();
};

init();
