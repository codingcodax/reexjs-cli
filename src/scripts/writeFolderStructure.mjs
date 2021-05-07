import { mkdirSync } from 'fs';
import ora from 'ora';

const writeFolderStructure = async (
    framework,
    predefinedFolders,
    additionalFolders,
    appDirectory
) => {
    let allFolders = [...predefinedFolders];
    additionalFolders.split(' ').map((folder) => allFolders.push(folder));
    allFolders = allFolders.filter((folder) => folder.length > 0);

    const spinner = ora('Writing folder structure...').start();
    spinner.start();

    if (framework === 'Next.js') {
        allFolders.map((folder) => {
            mkdirSync(
                `${appDirectory}/${folder}`,
                { recursive: true },
                (err) => {
                    if (err) throw err;
                }
            );
        });
    } else if (framework === 'React.js') {
        allFolders.map((folder) => {
            mkdirSync(
                `${appDirectory}/src/${folder}`,
                { recursive: true },
                (err) => {
                    if (err) throw err;
                }
            );
        });
    }

    spinner.succeed('Folder created successfully!');
};

export default writeFolderStructure;
