const express = require('express');
const path = require('path');

// ~~~~~~~~~~~~~~~~~~~~~SERVER SET UP~~~~~~~~~~~~~~~~~~~~~ //
const app = express();
const PORT = 3000;

// ~~~~~~~~~~~~~~~~~~~~~REQUIRE ROUTERS~~~~~~~~~~~~~~~~~~~~~ //

// ~~~~~~~~~~~~~~~~~~~~~PARSE REQUESTS~~~~~~~~~~~~~~~~~~~~~ //

// ~~~~~~~~~~~~~~~~~~~~~ROUTES FOR ROUTERS~~~~~~~~~~~~~~~~~~~~~ //

// ~~~~~~~~~~~~~~~~~~~~~SERVE APP, 404, & ERROR HANDLING~~~~~~~~~~~~~~~~~~~~~ //
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  app.use('/', express.static(path.join(__dirname, '../build')));

  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
  });
}

if (process.env.NODE_ENV === 'test') {
  app.get('/internalError', (req, res, next) => {
    return next({message: { err: 'Something went wrong' }});
  });
}

app.use('/*', (req, res) => {
  return res.status(404).send('404 Not Found');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})


module.exports = app.listen(PORT);