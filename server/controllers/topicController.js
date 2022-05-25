//valid ids for tdd, to be removed upon connection to db 
const VALID_IDS = [0, 1, 2, 3, 4, 5];
const topicController = {};

topicController.getTopics = async (req, res, next) => {
  try {
    // PLACEHOLDER FOR REAL DATA FROM DATABASE FOLLOWING AN "AWAIT" CALL
    res.locals.topics = [
      {
        id: 0,
        name: 'React',
        description: 'frontend library',
      },
      {
        id: 1,
        name: 'Express',
        description: 'server framework',
      },
      {
        id: 2,
        name: 'Redux',
        description: 'state management',
      },
    ];
    return next();
  } catch (err) {
    return next(err);
  }
};

topicController.getPosts = async (req, res, next) => {
  //todo
};

topicController.addPost = async (req, res, next) => {
  //todo
};

topicController.addTopic = async (req, res, next) => {
  //todo
};

module.exports = topicController;
