import {
  PredefinedFolders,
  AdditionalFolders,
  Framework,
  AppDirectory,
} from '../';

type WriteFolderStructure = (
  predefinedFolders: PredefinedFolders,
  additionalFolders: AdditionalFolders,
  framework: Framework,
  appDirectory: AppDirectory
) => void;

export default WriteFolderStructure;
