import { Routes, StyleScripting, AppDirectory, Framework } from '../';

type WriteReactRouting = (
  routes: Routes,
  framework: Framework,
  styleScripting: StyleScripting,
  appDirectory: AppDirectory
) => void;

export default WriteReactRouting;
