import { ArrayFromString } from '../../types';

const arrayFromString: ArrayFromString = (string, separator) =>
  string.split(separator).map((s) => s);

export default arrayFromString;
