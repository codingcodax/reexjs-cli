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
    msg: 'Set up pages directory',
    success: 'Pages directory set up successfully',
    err: 'Error to set up pages directory',
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
