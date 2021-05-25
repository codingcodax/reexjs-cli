import { spawn } from 'child_process';
import ora from 'ora';

const runSpawn = (
    { cmd, args, msg, success, err },
    appName,
    cwd,
    message = true
) =>
    new Promise((resolve, reject) => {
        const child = spawn(cmd, [...args, appName], { shell: true, cwd });

        if (message) {
            const spinner = ora(`${msg}...`).start();
            spinner.color = 'magenta';

            child.on('error', (error) => {
                spinner.fail(err);
                reject();
            });

            child.on('exit', () => {
                spinner.succeed(success);
                resolve('');
            });
        } else {
            child.on('error', (error) => {
                reject();
            });

            child.on('exit', () => {
                resolve('');
            });
        }
    });

export default runSpawn;
