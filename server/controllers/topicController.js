const database = require('../models/database');

const topicController = {};

topicController.getTopics = async (req, res, next) => {
  try {
    res.locals.topics = await database.getTopics();
    return next();
  } catch (err) {
    return next({
      log: 'An error occured in topicController.getTopics',
      message: { err: 'Server unable to retreive topics.' }
    });
  }
};

topicController.getPosts = async (req, res, next) => {
  const { id } = req.params;
  try {
    res.locals.posts = await database.getPosts(id);
    return next();
  } catch (err) {
    return next({
      log: 'An error occured in topicController.getPosts',
      message: { err: 'Server unable to retreive posts.' }
    });
  }
};

topicController.createPost = async (req, res, next) => {
  try {
    res.locals.newPost = await database.createPost(req.body);
    return next();
  } catch (err) {
    return ({
      log: 'An error occured in topicController.createPost',
      message: { err: 'Server unable to create new post.' }
    })
  }
};

topicController.createTopic = async (req, res, next) => {
  const topic = req.body;
  try {
    res.locals.newTopicId = await database.createTopic(topic);
    return next();
  } catch (err) {
    return next({
      log: 'An error occured in topicController.createTopic',
      message: { err: 'Server unable to create new topic.' }
    });
  }
};

module.exports = topicController;
