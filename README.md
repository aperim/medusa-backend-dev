# VS Code environment for Medusa Backend Development

This is a _super opinionated_ environment for development of the [MedusaJS backend](https://github.com/medusajs/medusa).

## Getting Started

You will need VS Code and Docker.

Make sure you understand how to use [Dev Containers in VS Code](https://code.visualstudio.com/docs/remote/containers-tutorial).

1. Clone this repo (or fork it - or whatever you want).
2. Open it with VS Code
3. Build the dev container

If you use the default `.env` file:
The backend, when started with `yarn start` will be listening on `3000`
The admin inteface which starts automatically, will be listening on `9000`
Meilisearch is listening on `7700`

## Note about hostnames

_Inside_ your development environment, all the services have a unique hostname. So, the backend will talk to the database via the `db` hostname, and the redis server via `redis`.

Outside of the development environment (ie your web browser) the services are all exposed as ports on localhost.

## Services

Assuming you keep the default .env config.

### Backend

Started by opening a terminal and running `yarn start`.
Browser [http://localhost:3000/](http://localhost:3000/)
Dev Environment [http://app:3000/](http://app:3000/)

### Medusa Admin

Browser [http://localhost:9000/](http://localhost:9000/)
Dev Environment [http://admin:9000/](http://admin:9000/)

### Meilisearch

Browser [http://localhost:7700/](http://localhost:7700/)
Dev Environment [http://meilisearch:7700/](http://meilisearch:7700/)

### Database Management

[Adminer](https://www.adminer.org/)
[http://localhost:8080/](http://localhost:8080/)
Connect to the postgres database using `db` as the host, not localhost as Adminer is inside the docker environment.

### Database

[PostgreSQL](https://www.postgresql.org/)
Your Machine `postgres://postgres:postgres@localhost:5432/medusa`
Dev Environment `postgres://postgres:postgres@db:5432/medusa`

### Memory Database

[Redis](https://redis.io/)
Your Machine `redis://localhost`
Dev Environment `redis://redis`

## Please Help
Please feel free to create PR's to clean up the config, or the documentation.
