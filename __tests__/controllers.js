const path = require('path');
const topicController = require(path.resolve(__dirname, '../server/controllers/topicController'));

xdescribe('topicController', () => {
  let req;
  let res;
  let next;
  beforeEach(() => {
    req = {};
    res = {
      locals: {},
    };
    next = jest.fn();
  });
  afterEach(() => {
    next.mockReset();
  });
  describe('getTopics', () => {
    beforeEach(() => {
      topicController.getTopics(req, res, next);
    });
    it('attaches a single array res.locals', () => {
      expect(res.locals.topics instanceof Array).toBe(true);
      expect(Object.keys(res.locals).length).toBe(1);
    });
    it('each topic is an object with 3 properties - id, name, and description', () => {
      expect(res.locals.topics.every((topic) => topic instanceof Object
        && Object.keys(topic).includes('id')
        && Object.keys(topic).includes('name')
        && Object.keys(topic).includes('description')
        && Object.keys(topic).length === 3)).toBe(true);
    });
    it('calls the next middleware function once without an error', () => {
      expect(next.mock.calls[0]).toEqual([]);
      expect(next.mock.calls.length).toBe(1);
    });
  });
  describe('getPosts', () => {
    beforeEach(() => {
      topicController.getPosts(req, res, next);
    });
  });
});
