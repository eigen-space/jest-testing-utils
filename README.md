# Why do we have that dev dependencies?

* `@eigenspace/codestyle` - includes tslint rules, config for typescript.
* `@eigenspace/helper-scripts` - scripts are used in npm scripts.
* `@types/*` - contains type definitions for specific library.
* `tslint` - it checks TypeScript code for readability, maintainability, and functionality errors.
* `typescript` - is a superset of JavaScript that have static type-checking and ECMAScript features.
* `husky` - used for configure git hooks.
* `lint-staged` - used for configure linters against staged git files.
* `prettier` - style components formatter.
* `jest` - access to global variables to modify.

# CI

**Important!**

Travis creates the .npmrc file during ci startup. This file contains the access token to the npm repository.
