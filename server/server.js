const createApp = require('./app');
const database = require('./models/database');

const app = createApp(database);
const PORT = 3000;

module.exports = app.listen(PORT);
