import { InstallFramework } from '../../types';

import run from '../utils/run';

import {
  installNext,
  installReact,
  installNextTS,
  installReactTS,
} from '../constants/commands';

const installFramework: InstallFramework = async (framework, appName) => {
  if (framework === 'Next') await run(installNext, [appName]);
  else if (framework === 'React') await run(installReact, [appName]);
  else if (framework === 'Next (TS)') await run(installNextTS, [appName]);
  else if (framework === 'React (TS)') await run(installReactTS, [appName]);
};

export default installFramework;
