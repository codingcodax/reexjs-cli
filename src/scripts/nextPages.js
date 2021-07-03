import { writeFileSync } from 'fs';
import ora from 'ora';

import pagesTemplate from '../constants/templates/pagesTemplate.js';
import { capitalizeFirstLetter } from '../utils/helpers.js';

const nextPages = (pages, appName, appDirectory) => {
    const pagesArray = pages
        .split(' ')
        .map((route) => capitalizeFirstLetter(route))
        .filter((page) => page !== 'Home');

    const spinner = ora('Set up pages...').start();
    spinner.color = 'magenta';

    // create next pages components
    try {
        pagesArray.map((page) => {
            writeFileSync(
                `${appDirectory}/pages/${page.toLowerCase()}.js`,
                pagesTemplate(page)
            );
        });

        spinner.succeed('Pages set up successfully!');
    } catch (err) {
        spinner.fail('Failed to set up pages');
    }
};

export default nextPages;
