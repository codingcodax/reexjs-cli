import { CapitalizeFirstLetter } from '../../types/index';

export const capitalizeFirstLetter: CapitalizeFirstLetter = (string) =>
  string.replace(/^\w/, (c: string) => c.toUpperCase());
