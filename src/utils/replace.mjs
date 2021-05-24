const deleteCurlyBraces = (value) => value.replace(/[{}]/g, '');
const deleteSemiColon = (value) => value.replace(/;/g, '');
const replaceValue = (value, toFind, toReplace) =>
    value.replace(toFind, toReplace);

export const replaceFontFamilySass = (value, isNextJs) => {
    let dataFormatted = value;

    if (isNextJs) {
        const toFindHome = `font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;`,
            toReplaceHome = `font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;`,
            toFindGlobals = `font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
            toReplaceGlobals = `font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`;

        dataFormatted = replaceValue(dataFormatted, toFindHome, toReplaceHome);
        dataFormatted = replaceValue(
            dataFormatted,
            toFindGlobals,
            toReplaceGlobals
        );
    } else {
        const toFindIndexBody = `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`;
        const toReplaceIndexBody = `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`;
        const toFindIndexCode = `font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace`;
        const toReplaceIndexCode = `font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`;

        dataFormatted = replaceValue(
            dataFormatted,
            toFindIndexBody,
            toReplaceIndexBody
        );
        dataFormatted = replaceValue(
            dataFormatted,
            toFindIndexCode,
            toReplaceIndexCode
        );
    }

    dataFormatted = deleteCurlyBraces(dataFormatted);
    dataFormatted = deleteSemiColon(dataFormatted);

    return dataFormatted;
};
