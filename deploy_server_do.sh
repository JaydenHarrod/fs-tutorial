#! /bin/bash
yarn build:server
docker build -t jaydenharrod/abb:latest .
docker push jaydenharrod/abb:latest
ssh root@178.128.124.167 "docker pull jaydenharrod/abb:latest && docker tag jaydenharrod/abb:latest dokku/abb:latest && dokku tags:deploy abb latest"
