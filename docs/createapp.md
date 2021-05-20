# Create App

Reexjs cli gives you several options to choose like:

-   App name
-   Framework to choose
-   Need routing?
-   Pages/routes name
-   Folder structure
-   Dependencies to install

Let's create a Next.js application:

1. First choose the name of the application. By default is _reexjs-app_.
2. Choose Next.js between the options.
3. Enter the pages that you want. _home about contact_
4. Choose from commonly use folders. _components_ _utils_
5. Enter the additional folders. _context_
6. Enter the dependencies that you want install. _sass_
7. Enter the dev dependencies that you want install. _prettier husky_

Finally your application structure will be the follow:

```shell
reexjs-app
├── components/
├── context/
├── package.json
├── package-lock.json
├── pages/
│   ├── about.js
│   ├── api/
│   │   └── ...
│   ├── _app.js
│   ├── contact.js
│   └── index.js
├── public/
│   └── ...
├── README.md
├── styles/
│   └── ...
└── utils/
```

You get extra folder and components, also you install dependencies and dev dependencies. Normally(just executing `npx create-next-app <appname>`) you would get:

```shell
reexjs-app
├── package.json
├── package-lock.json
├── pages/
│   ├── api/
│   │   └── ...
│   ├── _app.js
│   └── index.js
├── public/
│   └── ...
├── README.md
├── styles/
│   └── ...
└── utils/
```

You don't get extra folders, components, additional dependencies any of these.
