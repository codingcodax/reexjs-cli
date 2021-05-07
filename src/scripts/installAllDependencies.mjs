import {
    installDependencies,
    installDevDependencies,
} from '../constants/commands.mjs';
import runSpawn from '../utils/runSpawn.mjs';

const installAllDependencies = async (
    dependencies,
    devDependencies,
    appDirectory
) => {
    await runSpawn(installDependencies(dependencies), null, appDirectory);
    await runSpawn(installDevDependencies(devDependencies), null, appDirectory);
};

export default installAllDependencies;
