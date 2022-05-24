const pg = require('pg');
const { Pool } = pg;

const dbURI = process.env.DB_URI;

const pool = new Pool({
  connectionString: URI
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback)
}; 