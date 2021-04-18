//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
//change root to db user and password as db password
const db = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "ahmed",
    password: "1234",
    database: "business-card-generator",
  },
});

module.exports = db;
