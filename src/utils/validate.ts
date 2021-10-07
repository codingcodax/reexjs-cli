export const checkUpper = (value: string): string | boolean => {
  const regex = /[A-Z]/gm;
  if (!regex.test(value)) return true;

  return 'Please enter a valid name';
};

const checkNumber = (value: string): string | boolean => {
  const regex = /[0-9]/gm;
  if (!regex.test(value)) return true;

  return 'Please enter a valid name';
};

const checkSymbols = (value: string): string | boolean => {
  const regex = /[?/.]/gm;
  if (!regex.test(value)) return true;

  return 'Please enter a valid name';
};

export const validateValue = (value: string): string | boolean => {
  if (
    checkUpper(value) === true &&
    checkNumber(value) === true &&
    checkSymbols(value) === true
  )
    return true;

  return 'Please enter a valid name';
};
