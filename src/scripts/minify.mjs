import glob from 'glob';
import { minify } from 'terser';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const cwd = __dirname.slice(0, -12);

const globOptions = { ignore: ['**/node_modules/**'] };
const minifyOptions = { compress: true, mangle: true };

glob('src/**/*.mjs', globOptions, (er, files) => {
    files.map(async (file) => {
        const fileDirectory = `${cwd}/${file.replace('src', 'lib')}`;
        const folderDirectory = fileDirectory.slice(
            0,
            fileDirectory.lastIndexOf('/')
        );
        const data = readFileSync(file, 'utf8');
        const minifyCode = await minify(data, minifyOptions);

        mkdirSync(folderDirectory, { recursive: true }, (err) => {
            if (err) throw err;
        });

        writeFileSync(fileDirectory, minifyCode.code);
    });
});
