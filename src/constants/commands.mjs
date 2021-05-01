export const installReactJs = {
    cmd: 'npx',
    args: ['create-react-app'],
    msg: 'Installing create-react-app',
    success: 'Create react app successfully installed!',
    err: 'Create react app installation failed',
};

export const installNextJs = {
    cmd: 'npx',
    args: ['create-next-app'],
    msg: 'Installing create-next-app',
    success: 'Create next app successfully installed!',
    err: 'Create next app installation failed',
};

export const routesMkdir = {
    cmd: 'mkdir',
    args: [],
    msg: 'Creating pages directory',
    success: 'Pages directory created successfully',
    err: 'Error to create pages directory',
};

export const foldersMkdir = {
    cmd: 'mkdir',
    args: [],
    msg: 'Creating folders',
    success: 'Folders created successfully',
    err: 'Error to create Folders',
};

export const installDependencies = (dependencies) => {
    const command = {
        cmd: 'npm',
        args: ['i', dependencies],
        msg: 'Installing dependencies',
        success: 'Dependencies successfully installed!',
        err: 'Dependencies installation failed',
    };

    return command;
};

export const installDevDependencies = (dependencies) => {
    const command = {
        cmd: 'npm',
        args: ['i', '-D', dependencies],
        msg: 'Installing dev dependencies',
        success: 'Dev dependencies successfully installed!',
        err: 'Dev dependencies installation failed',
    };

    return command;
};
