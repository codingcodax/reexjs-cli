import runSpawn from '../utils/runSpawn.mjs';

import { installReactJs, installNextJs } from '../constants/commands.mjs';

const installFramework = async (framework, appName, cwd) => {
    if (framework === 'React.js') await runSpawn(installReactJs, appName, cwd);
    else if (framework === 'Next.js')
        await runSpawn(installNextJs, appName, cwd);
};

export default installFramework;
