# TypeScript/React/Redux Starter

This is the initial version of our starter project using React, TypeScript and Webpack to tie it all together.

## Commands

* `npm install`: install npm dependencies specified in package.json as well as typings specified in tsd.json (typings will be put into *typings* folder which is also git ignored).
* `postinstall`: runs automatically after `npm install` and triggers a `npm run build` to provide a build directory to `npm start` by default

* `npm run dev`: will start a development server (with live reloading) on [http://localhost:3000](http://localhost:3000). Note that in this case the bundle will be generated in memory and your bundle in *dist* might get out of sync.
* `npm start`: starts a production server serving the *dist* directory on [http://localhost:3000](http://localhost:3000)

* `npm run build`: bundle all of the application including js/css/html files, with index.html generated according to a template specified in *index.html* (Everything will be put into *dist* folder).

> Note: Demo username/password can be found [here](https://github.com/rangle/typescript-react-redux-starter/blob/master/src/api/mock/users.tsx)


## Improvements

This is an initial version of this setup and will be expanded in the future. Refer to the [issues section](https://github.com/rangle/rangle-starter/issues) to see what needs to be done, or create a [new one](https://github.com/rangle/rangle-starter/issues/new).

Issues for this particular starter project are tagged with the 'ts-react' label.

### Planned work

* Better support for custom typings (so we don't have to commit typings to the repo)
* Test examples (spec & unit)
* Component `displayName`, `propTypes`, `defaultProps` and documentation
* Auto-reloading API server (when specified)
* Enforce single-quotes for TS code and double-quotes for JSX.
  - ref: https://github.com/palantir/tslint/issues/673

## If something doesn't work

We centralize issue management for all rangle starters in the [rangle-starter](https://github.com/rangle/rangle-starter) repository, to help us keep things consistent.

Refer to the [issues section](https://github.com/rangle/rangle-starter/issues) to see if this has already been logged. Otherwise create a [new issue](https://github.com/rangle/rangle-starter/issues/new).

Be sure to tag your new issue with the 'ts-react' label so we can see which starter you're filing it for.

## License

Copyright (c) 2016 rangle.io

[MIT License][MIT]

[MIT]: ./LICENSE "Mit License"
