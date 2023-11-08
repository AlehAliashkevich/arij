# Run the application in the local environment

### Applications required to run

[Docker] (https://docs.docker.com/engine/install/) Docker

[Docker-compose] (https://docs.docker.com/compose/install/) Docker compose

[NodeJS] (https://nodejs.org/en/download) NodeJS 18

[Robo3t] (https://robomongo.org/) Mongo UI Client

### Launch

To run the application, you need to execute the following commands

```
cp .env.example .env
docker-compose up -d
```

Then wait until the mongosetup container is finished. You can check if the container is active with the command

```
docker ps
```

If the container has been completed it is necessary to switch off docker-compose To do this in the project folder, run
the command

```
docker-compose kill
```

The next step is to install the Lerna dependencies In the root of the repository, run the following commands

```
# install packages
npm i
# install Lerna packages
npm run bootstrap:efficiently
```

After that you need to run docker compose from the application folder

```
docker-compose up -d
```

### Application service ports

Postgresql UI [http://localhost:5050](http://localhost:5050)

Redis UI [http://localhost:8001](http://localhost:8001)

Grafana [http://localhost:3000](http://localhost:3000)

Loki [http://localhost:3100](http://localhost:3100)

### Debug

You need to execute commands to clear the cache

```
# Clearing the cache of images
docker system prune -af
# Clearing container volumes
docker system prune --volumes
docker volumes prune
# Start the application
docker-compose up
```

To clean up the installed npm packages, run the command from the root of the repository

```
bash scripts/rm-outputs.sh
```

## Libraries used in the application

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

[Fastify](https://github.com/fastify/fastify)

[Apollo](https://github.com/apollographql/apollo-server) GraphQL server.
