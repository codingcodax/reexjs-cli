import { InstallAllDependencies } from '../../types';

import {
  installDependencies,
  installDevDependencies,
} from '../constants/commands';
import run from '../utils/run';

const installAllDependencies: InstallAllDependencies = async (
  dependencies,
  devDependencies,
  appDirectory
) => {
  await run(installDependencies, [dependencies], true, appDirectory);
  await run(installDevDependencies, [devDependencies], true, appDirectory);
};

export default installAllDependencies;
