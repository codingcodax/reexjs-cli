import { writeFileSync } from 'fs';
import ora from 'ora';

import { CreateNextPages } from '../../types';

import templates from '../templates';
import arrayFromString from '../utils/arrayFromString';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

const createNextPages: CreateNextPages = (pages, framework, appDirectory) => {
  const pagesArray = arrayFromString(pages, ' ');

  // initialize spinner
  const spinner = ora('Set up pages...').start();
  spinner.color = 'magenta';

  // create page components
  try {
    const { next } = templates;

    pagesArray.map((page) => {
      writeFileSync(
        `${appDirectory}/pages/${page}.${framework === 'Next' ? 'js' : 'tsx'}`,
        (framework === 'Next' ? next.page : next.pagets).replace(
          /TITLE/g,
          capitalizeFirstLetter(page)
        )
      );
    });

    spinner.succeed('Pages set up successfully!');
  } catch (err) {
    spinner.fail('Failed to set up pages');
    console.error(err);
  }
};

export default createNextPages;
