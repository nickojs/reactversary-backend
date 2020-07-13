#!/bin/bash

# since it's easier to summon satan than to create a working docker-compose.yml, 
# here is a script to launch this application as a docker container

# you'll also need another container with a mysql:5.7 image running, 
# with this .env file configuration (db name, username, etc), on 172.18.0.3:3306

# $1 = this container image
# $2 = this container name

docker run -d --rm --name=$2 --env-file=.env $1