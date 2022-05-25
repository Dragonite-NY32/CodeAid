const express = require('express');
const path = require('path');
const topicController = require('./controllers/topicController');

const createApp = (database) => {
  const app = express();
  
  // ~~~~~~~~~~~~~~~~~~~~~PARSE REQUESTS~~~~~~~~~~~~~~~~~~~~~ //
  app.use(express.json());

  // ~~~~~~~~~~~~~~~~~~~~~ROUTES~~~~~~~~~~~~~~~~~~~~~ //
  app.get('/api/topics', topicController.getTopics, (req, res) => res.status(200).json(res.locals.topics));
  app.get('/api/posts/:id', topicController.getPosts, (req, res) => res.status(200).json(res.locals.posts));
  app.post('/api/topics', topicController.createTopic, (req, res) => res.status(200).json(res.locals.newTopicId));
  app.post('/api/posts', topicController.createPost, (req, res) => res.status(200).json(res.locals.newPost));

  // ~~~~~~~~~~~~~~~~~~~~~SERVE APP, 404, & ERROR HANDLING~~~~~~~~~~~~~~~~~~~~~ //
  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
    app.use('/', express.static(path.join(__dirname, '../build')));

    app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../build/index.html')));
  }

  if (process.env.NODE_ENV === 'test') {
    app.get('/internalError', (req, res, next) => next({ message: { err: 'Something went wrong' } }));
  }

  app.use('/*', (req, res) => res.status(404).send('404 Not Found'));

  app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = { ...defaultErr, ...err };
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

  return app;
};

module.exports = createApp;
