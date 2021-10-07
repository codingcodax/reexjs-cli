// common
export * from './common/handleSetup';
export { default as Command } from './common/Command';

// scripts
export { default as Setup } from './scripts/setup';
export { default as InstallFramework } from './scripts/installFramework';
export { default as WriteReactRouting } from './scripts/writeReactRouting';
export { default as CreateNextPages } from './scripts/createNextPages';
export { default as WriteFolderStructure } from './scripts/writeFolderStructure';
export { default as WriteStyleScripting } from './scripts/writeStyleScripting';
export { default as InstallAllDependencies } from './scripts/installAllDependencies';

// utils
export { default as CapitalizeFirstLetter } from './utils/capitalizeFirstLetter';
export { default as ArrayFromString } from './utils/arrayFromString';
