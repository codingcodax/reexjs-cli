import { createRequire } from 'module';

export const capitalizeFirstLetter = (string) =>
    string.replace(/^\w/, (c) => c.toUpperCase());

export const getJsonFile = (jsonFile) => {
    const require = createRequire(import.meta.url);
    const data = require(jsonFile);

    return data;
};
