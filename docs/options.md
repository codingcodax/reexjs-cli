# Options

Depending on the fact that Framework is chosen, different questions will be asked:

-   **App Name**:<br />
    Enter your app name. By default it fallbacks to _reexjs-app_.
    <br /><br />
    ✅ Valid App Names:

    -   my-app
    -   onl1n3
    -   one-2-three

    ❌ Invalid App Names:

    -   My-App
    -   Onl1n3
    -   One-2-Three

-   **Framework**:<br />
    Choose the Framework of your application. _Next.js_ or _React.js_.

-   **Pages Names**: (_Next.Js_)<br />
    Enter space separated pages for next.js application.

-   **React Routing**: (_React.Js_)<br />
    Choose if react routes is needed. Yes or No.<br />
    If required, enter space separated routes names.

    ✅ Valid Route Names:

    -   my-route
    -   one-two-three

    ❌ Invalid Route Names:

    -   My-Route:
    -   one-2-three
    -   some-route/
    -   some.route
    -   some?route

-   **Create Folders**:<br />

    -   Predefined:

        -   You can choose from commonly use folders to create: _assets_, _components_, _utils_, _lib_.

    -   Custom:
        -   You can enter space separated folders. The conventions would be same as routes in react routing. E.g. `context hooks`

-   **Style scripting**:<br />
    Choose if you want use SASS preprocessor in your styles. _SCSS_, _SASS_ or _CSS_.

-   **Dependencies**: (`npm i <dependencies>`)<br />
    You can enter space separated dependencies. The conventions would be same as routes in react routing. E.g. `react-bootstrap lodash moment`.
    This script run the code

-   **Dev Dependencies**: (`npm i -D <devDependencies>`)<br />
    You can enter separated dev dependencies. The conventions would be same as routes in react routing. E.g. `prettier husky lint-staged`.
