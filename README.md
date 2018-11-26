# Fullstack Tutorial

This repo is following on with the tutorial from Ben Awad.

## Running Environment

### Root

Run redis server: `redis-server`

Run postgres server: `psql`

Copy env for local and paste SparkPost API key: `cp .env.example .env`

Copy env for production and paste SparkPost API key: `cp .env.example .env.prod`

Install packages: `yarn`

Build server assets: `yarn build:server`

Build web assets: `yarn build:web`

Deploy server: `./deploy_server_do.sh`

Deploy web: `./deploy_web.sh`

### Web

CD: `cd packages/web`

Run JEST tests: `yarn test`

Start React server on 3000: `yarn start`

Path to deploy: `./packages/web/build`

### Server

CD: `cd packages/web`

Run JEST tests: `yarn test`

Start TS server on 4000: `yarn start`

## Guides

https://developers.sparkpost.com/api/

https://yarnpkg.com/lang/en/docs/workspaces/

https://elements.heroku.com/addons

https://devcenter.heroku.com/articles/container-registry-and-runtime
