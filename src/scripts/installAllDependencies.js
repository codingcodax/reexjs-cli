import {
    installDependencies,
    installDevDependencies,
} from '../constants/commands.js';
import runSpawn from '../utils/runSpawn.js';

const installAllDependencies = async (
    dependencies,
    devDependencies,
    appDirectory
) => {
    await runSpawn(installDependencies(dependencies), null, appDirectory);
    await runSpawn(installDevDependencies(devDependencies), null, appDirectory);
};

export default installAllDependencies;
