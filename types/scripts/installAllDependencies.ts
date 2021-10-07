import { Dependencies, DevDependencies, AppDirectory } from '../';

type installAllDependencies = (
  dependencies: Dependencies,
  devDependencies: DevDependencies,
  appDirectory: AppDirectory
) => void;

export default installAllDependencies;
