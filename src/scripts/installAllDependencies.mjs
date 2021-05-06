import {
    installDependencies,
    installDevDependencies,
} from '../constants/commands.mjs';
import runSpawn from '../utils/runSpawn.mjs';

const installAllDependencies = async (
    dependencies,
    devDependencies,
    directory
) => {
    await runSpawn(installDependencies(dependencies), null, directory);
    await runSpawn(installDevDependencies(devDependencies), null, directory);
};

export default installAllDependencies;
