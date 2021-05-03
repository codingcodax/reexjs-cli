export const checkUpper = (value) => {
    const regex = /[A-Z]/gm;
    if (!regex.test(value)) return true;

    return 'Please enter a valid name';
};

const checkNumber = (value) => {
    const regex = /[0-9]/gm;
    if (!regex.test(value)) return true;

    return 'Please enter a valid name';
};

export const checkUpperAndName = (value) => {
    // if (checkUpper(value) === true && checkNumber(value) === true) return true;

    checkUpper(value);
    checkNumber(value);

    return 'Please enter a valid name';
};
