import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

const react = {
  route:
    'const TITLE = () => {\n  return (\n    <section>\n      <p>TITLE Page Component</p>\n    </section>\n    );\n};\n\nexport default TITLE;',
  app: (routesArray: string[]): string => {
    const routes = routesArray.map((route) => capitalizeFirstLetter(route));

    const routeImports = routes.map(
      (route) => `import ${route} from './components/pages/${route}';\n`
    );

    const routeComponents = routes.map(
      (route) =>
        `          <Route exact path=${
          route === 'Home' ? "'/'" : `'/${route.toLowerCase()}'`
        } component={${route}} />\n`
    );

    const appFunction =
      `${routeImports}\nconst App = () => {\n  return (\n    <>\n      <BrowserRouter>\n        <Switch>\n${routeComponents}        </Switch>\n      </BrowserRouter>\n    </>\n  );\n};\n\nexport default App;`.replace(
        /,/g,
        ''
      );

    return `import { BrowserRouter, Switch, Route } from 'react-router-dom';\n\n${appFunction}`;
  },
};

export default react;
