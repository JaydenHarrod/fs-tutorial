#! /bin/bash
yarn build:server
heroku container:push --app=evening-castle-55002 web
heroku container:release --app=evening-castle-55002 web
