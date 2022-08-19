import { ConnectionOptions, DatabaseType, Entity, Migration } from 'typeorm';

import { projectConfig } from "./medusa-config";

const type: DatabaseType = "postgres";
const url: string = projectConfig.database_url;

const logging = false
const logger = 'file'
const synchronize = false;

const use_medusa_direct = true;
const use_src = true;
const use_dist = false;

const entities: string[] = [];
const migrations: string[] = [];

if(use_medusa_direct) {
  entities.push(__dirname + "/node_modules/@medusajs/medusa/dist/models/index.js");
  entities.push(__dirname + "/node_modules/@medusajs/medusa/dist/models/notification-provider.js");
  migrations.push(__dirname + "/node_modules/@medusajs/medusa/dist/migrations/index.js");
}
if(use_src) {
  entities.push(__dirname + "/src/models/**/*.ts");
  migrations.push(__dirname + "/src/migrations/**/*.ts");
}
if(use_dist) {
  entities.push(__dirname + "/dist/models/**/*.js");
  migrations.push(__dirname + "/dist/migrations/**/*.js");
}

const config: ConnectionOptions = {
  type,
  url,
  entities,
  migrations,
  cli: {
    migrationsDir: __dirname + "/src/migrations",
    entitiesDir: __dirname + "/src/models",
    subscribersDir: __dirname + "/src/subscribers",
  },
  synchronize,
  logging,
  logger
};

export default config;
