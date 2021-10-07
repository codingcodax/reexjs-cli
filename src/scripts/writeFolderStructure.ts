import { mkdirSync } from 'fs';
import ora from 'ora';

import { WriteFolderStructure } from '../../types';

const writeFolderStructure: WriteFolderStructure = (
  predefinedFolders,
  additionalFolders,
  framework,
  appDirectory
) => {
  let foldersArray = [...predefinedFolders];
  additionalFolders.split(' ').map((folder) => foldersArray.push(folder));
  foldersArray = foldersArray.filter((folder) => folder.length > 0);

  const spinner = ora('Set up folders structure...').start();
  spinner.color = 'magenta';

  try {
    // if (framework === 'Next' || framework === 'Next (TS)')
    foldersArray.map((folder) =>
      mkdirSync(
        `${appDirectory}/${
          framework === 'Next' || framework === 'Next (TS)' ? '' : 'src/'
        }${folder}`,
        { recursive: true }
      )
    );

    spinner.succeed('Folders structure set up successfully!');
  } catch (err) {
    spinner.fail('Failed to set up folders structure');
  }
};

export default writeFolderStructure;
