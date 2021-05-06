import { mkdir } from 'fs';

const writeFolderStructure = async (
    framework,
    predefinedFolders,
    additionalFolders,
    directory
) => {
    let allFolders = [...predefinedFolders];
    additionalFolders.split(' ').map((folder) => allFolders.push(folder));
    allFolders = allFolders.filter((folder) => folder.length > 0);

    if (framework === 'Next.js')
        allFolders.map((folder) => {
            mkdir(`${directory}/${folder}`, { recursive: true }, (err) => {
                if (err) throw err;
            });
        });
    else if (framework === 'React.js')
        allFolders.map((folder) => {
            mkdir(`${directory}/src/${folder}`, { recursive: true }, (err) => {
                if (err) throw err;
            });
        });
};

export default writeFolderStructure;
