import runSpawn from '../utils/runSpawn.js';

import { installReactJs, installNextJs } from '../constants/commands.js';

const installFramework = async (framework, appName, cwd) => {
    if (framework === 'React.js') await runSpawn(installReactJs, appName, cwd);
    else if (framework === 'Next.js')
        await runSpawn(installNextJs, appName, cwd);
};

export default installFramework;
