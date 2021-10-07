import {
  AppName,
  Framework,
  IsRoutingNeeded,
  Routes,
  Pages,
  PredefinedFolders,
  AdditionalFolders,
  StyleScripting,
  Dependencies,
  DevDependencies,
} from '../';

type setup = (
  appName: AppName,
  framework: Framework,
  isRoutingNeeded: IsRoutingNeeded,
  routes: Routes,
  pages: Pages,
  predefinedFolders: PredefinedFolders,
  additionalFolders: AdditionalFolders,
  styleScripting: StyleScripting,
  dependencies: Dependencies,
  devDependencies: DevDependencies
) => void;

export default setup;
