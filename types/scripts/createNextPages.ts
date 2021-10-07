import { Pages, Framework, AppDirectory } from '../';

type NextPages = (
  pages: Pages,
  framework: Framework,
  appDirectory: AppDirectory
) => void;

export default NextPages;
