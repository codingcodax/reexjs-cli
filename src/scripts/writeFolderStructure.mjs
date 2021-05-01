import { foldersMkdir } from '../constants/commands.mjs';
import runSpawn from '../utils/runSpawn.mjs';

const writeFolderStructure = async (
    framework,
    predefinedFolders,
    additionalFolders,
    appName,
    directory
) => {
    let allFolders = [...predefinedFolders];
    additionalFolders.split(' ').map((folder) => allFolders.push(folder));
    allFolders = allFolders.filter((folder) => folder.length > 0);

    if (framework === 'Next.js')
        foldersMkdir.args = allFolders.map(
            (folder) => `${directory}/${folder}`
        );
    else if (framework === 'React.js')
        foldersMkdir.args = allFolders.map(
            (folder) => `${directory}/src/${folder}`
        );

    if (allFolders.length !== 0)
        await runSpawn(foldersMkdir, appName, directory);
};

export default writeFolderStructure;
