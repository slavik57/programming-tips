// The video for this file:
// https://youtu.be/Wo0gXUVjy2A

import { Client } from 'pg';
import * as initializeKnex from 'knex'

const connectionString = 'postgresql://postgres:pass@localhost:5432/postgres';

var knex = initializeKnex({
  client: 'pg',
  connection: connectionString,
  migrations: {
    tableName: 'migrations',
    directory: 'dbMigrations'
  }
});

const client = new Client({
  connectionString: connectionString
})
client.connect()

knex.migrate.latest().then(() => {
  queryCats()
    .then(() => client.query('INSERT INTO cats(name, rank) VALUES ($1, $2)', ['Padington', 4]))
    .then(queryCats)
    .then(() => client.query("DELETE FROM cats WHERE name = $1", ['Padington']))
    .then(queryCats)
    .catch((err) => {
      console.log(err)
    })
    .then(() => {
      client.end()
      knex.destroy();
    });
})


function queryCats() {
  return client.query('SELECT * FROM cats')
    .then(showRes);
}

function showRes(res) {
  console.log('========= query results ===========')
  res.rows.forEach(row => console.log(JSON.stringify(row)));
}