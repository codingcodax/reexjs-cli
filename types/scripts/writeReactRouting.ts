import { Routes, AppName, AppDirectory, Framework } from '../';

type WriteReactRouting = (
  routes: Routes,
  framework: Framework,
  appName: AppName,
  appDirectory: AppDirectory
) => void;

export default WriteReactRouting;
