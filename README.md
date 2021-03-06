[![Build Status][travis-badge]][travis-badge-url] 
[![Coverage Status][coveralls-badge]][coveralls-badge-url]
[![Dependency Status][david-badge]][david-badge-url]
[![devDependency Status][david-dev-badge]][david-dev-badge-url]

[travis-badge]: https://travis-ci.org/fjrd84/health-nlp-react.svg?branch=master
[travis-badge-url]: https://travis-ci.org/fjrd84/health-nlp-react
[coveralls-badge]: https://coveralls.io/repos/github/fjrd84/health-nlp-react/badge.svg?branch=master
[coveralls-badge-url]: https://coveralls.io/github/fjrd84/health-nlp-react?branch=master
[david-badge]: https://david-dm.org/fjrd84/health-nlp-react.svg
[david-badge-url]: https://david-dm.org/fjrd84/health-nlp-react
[david-dev-badge]: https://david-dm.org/fjrd84/health-nlp-react/dev-status.svg
[david-dev-badge-url]: https://david-dm.org/fjrd84/health-nlp-react?type=dev

# HealthNlpFrontend (React)

This repository contains the frontend part of the ***health-nlp*** project.

The ***health-nlp*** project is an NLP (Natural Language Processing) demo composed by the following repositories:

- [health-nlp-react](https://github.com/fjrd84/health-nlp-react): frontend part. It displays the results of the analysis (stored in firebase) and explains everything about the project. It is a react+redux web application.
- [health-nlp-node](https://github.com/fjrd84/health-nlp-node): nodeJS/express backend for the health-nlp-react frontend. It takes new job requests and sends them to the beanstalkd job queue. It also connects to information sources, streaming information to the analyzer.
- [health-nlp-analysis](https://github.com/fjrd84/health-nlp-analysis) (this repository): it processes jobs from beanstalkd and sends the results to firebase. It is a Python project.

This project is still on an early stage of development. You can find the preview version on [https://www.lifescope-project.com](https://www.lifescope-project.com).

For more information about the structure of this project, see [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Development server

Run `npm start` or `yarn start` to start a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `yarn test` to run the unit tests.

## Debugging unit tests on visual studio code

In order to debug the Jest tests of this project using Visual Studio Code, you need to use node JS version v6.10.3. An example `Jest Tests` test configuration can be found into the `.vscode/launch.json` file.

## Create React App

This project has been scaffolded with [create-react-app](https://github.com/facebookincubator/create-react-app). Visit its repository for more information.