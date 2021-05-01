import { spawn } from 'child_process';
import ora from 'ora';

const runSpawn = ({ cmd, args, msg, success, err }, appName, cwd) =>
    new Promise((resolve, reject) => {
        const child = spawn(cmd, [...args, appName], { shell: true, cwd });
        const spinner = ora(`${msg}...`).start();
        spinner.start();

        child.on('error', (error) => {
            spinner.fail();
            reject(err);
        });

        child.on('exit', () => {
            spinner.succeed(success);
            resolve('');
        });
    });

export default runSpawn;
