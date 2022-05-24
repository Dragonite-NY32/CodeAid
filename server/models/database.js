const pg = require('pg');

const { Pool } = pg;

// Set URI depending on environment
const dbURI = process.env.NODE_ENV === 'test' ? process.env.TEST_DB_URI : process.env.DB_URI;

// Establish a new connection pool
const pool = new Pool({
  connectionString: dbURI,
});

const database = {};

database.createTopic = async (topic) => {
  
};

database.getTopics = async (id) => {

};

database.createPost = async (post) => {

};

database.getPosts = async (topicId) => {

};

module.exports = database;
