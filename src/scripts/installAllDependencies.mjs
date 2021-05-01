import {
    installDependencies,
    installDevDependencies,
} from '../constants/commands.mjs';
import runSpawn from '../utils/runSpawn.mjs';

const installAllDependencies = async (
    dependencies,
    devDependencies,
    appName,
    directory
) => {
    await runSpawn(installDependencies(dependencies), appName, directory);
    await runSpawn(installDevDependencies(devDependencies), appName, directory);
};

export default installAllDependencies;
