import { renameSync, unlinkSync, writeFileSync, readFileSync } from 'fs';

import { WriteStyleScripting } from '../../types';
import { installDependencies } from '../constants/commands';

import templates from '../templates';
import run from '../utils/run';

const writeStyleScripting: WriteStyleScripting = async (
  styleScripting,
  framework,
  appDirectory
) => {
  try {
    if (styleScripting === 'SCSS' || styleScripting === 'SASS') {
      await run(installDependencies, ['sass'], false, appDirectory);

      if (framework === 'Next' || framework === 'Next (TS)') {
        unlinkSync(`${appDirectory}/styles/Home.module.css`);

        writeFileSync(
          `${appDirectory}/styles/globals.css`,
          templates.common.styles
        );

        renameSync(
          `${appDirectory}/styles/globals.css`,
          `${appDirectory}/styles/globals.${styleScripting.toLowerCase()}`
        );

        writeFileSync(
          `${appDirectory}/pages/_app.${framework === 'Next' ? 'js' : 'tsx'}`,
          readFileSync(
            `${appDirectory}/pages/_app.${framework === 'Next' ? 'js' : 'tsx'}`,
            'utf8'
          ).replace('css', styleScripting.toLowerCase())
        );
      } else if (framework === 'React' || framework === 'React (TS)') {
        unlinkSync(`${appDirectory}/src/App.css`);

        writeFileSync(`${appDirectory}/src/index.css`, templates.common.styles);

        renameSync(
          `${appDirectory}/src/index.css`,
          `${appDirectory}/src/index.${styleScripting.toLowerCase()}`
        );

        writeFileSync(
          `${appDirectory}/src/index.${framework === 'React' ? 'js' : 'tsx'}`,
          readFileSync(
            `${appDirectory}/src/index.${framework === 'React' ? 'js' : 'tsx'}`,
            'utf8'
          ).replace('css', styleScripting.toLowerCase())
        );
      }
    } else if (styleScripting === 'Chakra UI') {
      if (framework === 'Next' || framework === 'Next (TS)') {
        console.log('Setting chakra ui for nextjs');
      } else if (framework === 'React' || framework === 'React (TS)') {
        console.log('Setting chakra ui for reactjs');
      }
    } else if (styleScripting === 'Tailwind CSS') {
      if (framework === 'Next' || framework === 'Next (TS)') {
        console.log('Setting tailwind fro nextjs');
      } else if (framework === 'React' || framework === 'React (TS)') {
        console.log('Setting tailwind fro reactjs');
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export default writeStyleScripting;
