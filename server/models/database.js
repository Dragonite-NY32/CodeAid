const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const { Pool } = pg;

// Set URI depending on environment
const dbURI = process.env.NODE_ENV === 'production' ? process.env.DB_URI : process.env.TEST_DB_URI;

// Establish a new connection pool
const pool = new Pool({
  connectionString: dbURI,
});

const database = {};

database.createTopic = async (topic) => {
  const { name, description } = topic;
  const { rows } = await pool.query('INSERT INTO Topics(name, description) VALUES ($1, $2) RETURNING id', [name, description]);
  const topicId = rows[0].id;
  return topicId;
};

database.getTopic = async (id) => {
  const { rows } = await pool.query('SELECT * FROM Topics WHERE id = $1', [id]);
  return rows[0];
};

database.getTopics = async () => {
  const { rows } = await pool.query('SELECT * FROM Topics');
  return rows;
};

database.createPost = async (post) => {
  const { title, content, author, topicId } = post;
  const { rows } = await pool.query('INSERT INTO Posts(title, content, author) VALUES ($1, $2, $3) RETURNING *;', [title, content, author]);
  const postId = rows[0].id;
  await pool.query('INSERT INTO Topics_in_Posts(post_id, topic_id) VALUES($1, $2);', [postId, topicId]);
  return rows[0];
};

database.getPosts = async (topicId) => {
  const { rows } = await pool.query('SELECT * FROM Posts INNER JOIN Topics_in_Posts ON Posts.id = post_id WHERE Topics_in_Posts.topic_id = $1', [topicId]);
  return rows;
};

database.query = (text, params, callback) => pool.query(text, params, callback);

database.end = () => pool.end();

module.exports = database;
