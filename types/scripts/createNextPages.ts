import { Pages, Framework, AppDirectory, StyleScripting } from '../';

type NextPages = (
  pages: Pages,
  framework: Framework,
  styleScripting: StyleScripting,
  appDirectory: AppDirectory
) => void;

export default NextPages;
