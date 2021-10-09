import { writeFileSync } from 'fs';
import ora from 'ora';

import { CreateNextPages } from '../../types';

import templates from '../templates';
import arrayFromString from '../utils/arrayFromString';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

const createNextPages: CreateNextPages = (
  pages,
  framework,
  styleScripting,
  appDirectory
) => {
  const pagesArray = arrayFromString(pages, ' ');

  // initialize spinner
  const spinner = ora('Set up pages...').start();
  spinner.color = 'magenta';

  // create page components
  try {
    const { next, common } = templates;

    const data =
      framework === 'Next'
        ? styleScripting === 'Chakra UI'
          ? common.pageChakra
          : common.page
        : styleScripting === 'Chakra UI'
        ? next.ts.pageChakra
        : next.ts.page;

    pagesArray.map((page) => {
      writeFileSync(
        `${appDirectory}/pages/${page}.${framework === 'Next' ? 'js' : 'tsx'}`,
        data.replace(/TITLE/g, capitalizeFirstLetter(page))
      );
    });

    writeFileSync(
      `${appDirectory}/pages/index.${framework === 'Next' ? 'js' : 'tsx'}`,
      data.replace(/TITLE/g, 'Home')
    );

    spinner.succeed('Pages set up successfully!');
  } catch (err) {
    spinner.fail('Failed to set up pages');
    console.error(err);
  }
};

export default createNextPages;
