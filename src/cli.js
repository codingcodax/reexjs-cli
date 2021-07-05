import { Command } from 'commander';
const program = new Command();

import reexJsCli from './index.js';
import { reexJsCliDefault } from './scripts/index.js';
import { getJsonFile } from './utils/helpers.js';

const packageConfig = getJsonFile('../../package.json');

const init = async () => {
    // set up options
    program
        .name('reexjs-cli')
        .usage('[-n, -r] command')
        .option(
            '-n, --is-next-js [type]',
            'Create Next.js app with default ReexJs options.'
        )
        .option(
            '-r, --is-react-js [type]',
            'Create React.js app with default ReexJs options.'
        )
        .version(
            packageConfig.version,
            '-v, --version',
            'Show the current version'
        );

    program.parse(process.argv);

    const { isNextJs, isReactJs } = program.opts();
    const appName =
        isNextJs === true || isReactJs === true
            ? 'reexjs-app'
            : isNextJs || isReactJs;

    // execute script depending of arguments
    if (isNextJs && isReactJs) return;
    else if (isNextJs || isReactJs)
        reexJsCliDefault(appName, isNextJs, isReactJs);
    else reexJsCli();
};

init();
