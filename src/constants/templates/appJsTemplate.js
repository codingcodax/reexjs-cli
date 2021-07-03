const appJsTemplate = (routes) => {
    const routeImports = routes.map(
        (route) => `import ${route} from './components/pages/${route}';\n`
    );

    const routeComponents = routes.map(
        (route) =>
            `          <Route exact path=${
                route === 'Home' ? "'/'" : `'/${route.toLowerCase()}'`
            } component={${route}} />\n`
    );

    const appFunction = `${routeImports}\nconst App = () => {\n  return (\n    <>\n      <BrowserRouter>\n        <Switch>\n${routeComponents}        </Switch>\n      </BrowserRouter>\n    </>\n  );\n};\n\nexport default App;`.replace(
        /,/g,
        ''
    );

    return `import { BrowserRouter, Switch, Route } from 'react-router-dom';\n\n${appFunction}`;
};

export default appJsTemplate;
