import { spawn } from 'child_process';
import ora from 'ora';
import { Command } from '../../types';

const run = (
  command: Command,
  additionalArgs: string[],
  message = true,
  cwd = process.cwd()
): Promise<void> =>
  new Promise((resolve, reject) => {
    const { cmd, args, msg, success, err } = command;

    const processCommand = spawn(cmd, [...args, ...additionalArgs], {
      shell: true,
      cwd,
    });

    if (message) {
      const spinner = ora(`${msg}...`).start();
      spinner.color = 'magenta';

      processCommand.on('error', (error) => {
        spinner.fail(err);
        reject(error);
      });

      processCommand.on('exit', () => {
        spinner.succeed(success);
        resolve();
      });
    } else {
      processCommand.on('error', (error) => {
        reject(error);
      });

      processCommand.on('exit', () => {
        resolve();
      });
    }
  });

export default run;
