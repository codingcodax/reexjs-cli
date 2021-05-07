import { writeFileSync } from 'fs';

import pagesTemplate from '../constants/templates/pagesTemplate.mjs';
import { capitalizeFirstLetter } from '../utils/helpers.mjs';

const nextPages = (pages, appName, directory) => {
    const pagesArray = pages
        .split(' ')
        .map((route) => capitalizeFirstLetter(route))
        .filter((page) => page !== 'Home');

    // create next pages components
    try {
        const data = pagesArray.map((page) => {
            writeFileSync(
                `${directory}/pages/${page.toLowerCase()}.js`,
                pagesTemplate(page)
            );
        });
    } catch (err) {
        console.error(err);
    }
};

export default nextPages;
