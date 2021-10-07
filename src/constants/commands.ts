export const installNext = {
  cmd: 'npx',
  args: ['create-next-app'],
  msg: 'Installing Next app with with create-next-app',
  success: 'Create next app successfully installed!',
  err: 'Create next app installation failed',
};

export const installReact = {
  cmd: 'npx',
  args: ['create-react-app'],
  msg: 'Installing React app with with create-react-app',
  success: 'Create react app successfully installed!',
  err: 'Create react app installation failed',
};

export const installNextTS = {
  cmd: 'npx',
  args: ['create-next-app', '--ts'],
  msg: 'Installing Next (TS) app with with create-react-app',
  success: 'Create react app successfully installed!',
  err: 'Create react app installation failed',
};

export const installReactTS = {
  cmd: 'npx',
  args: ['create-react-app', '--template typescript'],
  msg: 'Installing React (TS) app with with create-react-app',
  success: 'Create react app successfully installed!',
  err: 'Create react app installation failed',
};

export const routesMkdir = {
  cmd: 'mkdir',
  args: [''],
  msg: 'Set up pages directory',
  success: 'Pages directory set up successfully',
  err: 'Error to set up pages directory',
};

export const installDependencies = {
  cmd: 'npm',
  args: ['i'],
  msg: 'Installing dependencies',
  success: 'Dependencies successfully installed!',
  err: 'Dependencies installation failed',
};

export const installDevDependencies = {
  cmd: 'npm',
  args: ['i', '-D'],
  msg: 'Installing dev dependencies',
  success: 'Dev dependencies successfully installed!',
  err: 'Dev dependencies installation failed',
};
