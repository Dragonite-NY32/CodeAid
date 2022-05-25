const database = require('../server/models/database');

beforeAll( async () => {
  const clearDatabase = `
    DELETE FROM Topics_in_Posts;
    DELETE FROM Topics;
    DELETE FROM Posts;
    ALTER SEQUENCE Topics_id_seq RESTART WITH 1;
    ALTER SEQUENCE Posts_id_seq RESTART WITH 1;
  `
  database.query(clearDatabase);
});

afterAll(() => database.end(() => console.log('pool has ended')));

describe('query to handle topic creation', () => {
  it('should write one row to the Topics table', async () => {
    await database.createTopic({ name: 'First Topic', description: 'First Description' });
    const { rows } = await database.query('SELECT * FROM Topics');
    expect(rows.length).toBe(1);
  });

  it('should insert a new Topic into the Topics table', async () => {
    await database.createTopic({ name: 'Second Topic', description: 'Second Description' });
    const { rows } = await database.query('SELECT * FROM Topics');
    expect(rows[1].name).toBe('Second Topic');
    expect(rows[1].description).toBe('Second Description');
  });

  it('should return the id of the newly created topic', async () => {
    const id = await database.createTopic({ name: 'Third Topic', description: 'Third Description' });
    expect(id).toBe(3);
  });
});

describe('query to handle topic retrieval', () => {
  it('should retreive one topic from the Topics table', async () => {
    await database.query('DELETE FROM Topics');
    await database.query('ALTER SEQUENCE Topics_id_seq RESTART WITH 1;');
    await database.createTopic({ name: 'First Topic', description: 'First Description' });
    const { id, name, description } = await database.getTopic(1);
    expect(id).toBe(1);
    expect(name).toBe('First Topic');
    expect(description).toBe('First Description');
  });

  it('should retrieve all topics from topics table', async () => {
    await database.createTopic({ name: 'Second Topic', description: 'Second Description' });
    await database.createTopic({ name: 'Third Topic', description: 'Third Description' });
    const topics = await database.getTopics();
    expect(topics.length).toBe(3)
    expect(topics[0].id).toBe(1);
    expect(topics[1].id).toBe(2);
    expect(topics[2].id).toBe(3);
    expect(topics[0].name).toBe('First Topic');
    expect(topics[1].name).toBe('Second Topic');
    expect(topics[2].name).toBe('Third Topic');
    expect(topics[0].description).toBe('First Description');
    expect(topics[1].description).toBe('Second Description');
    expect(topics[2].description).toBe('Third Description');
  });
});

describe('query to handle post creation and update join table', () => {
  it('should write one row to the posts table', async () => {
    await database.createPost({ title: 'First Title', content: 'First Content', author: 'First Post Author', topicId: 1 });
    const { rows } = await database.query('SELECT * FROM Posts');
    expect(rows[0].id).toBe(1);
  });

  it('should insert one post into the post table', async () => {
    await database.createPost({ title: 'Second Title', content: 'Second Content', author: 'Second Post Author', topicId: 2 });
    const { rows } = await database.query('SELECT * FROM Posts');
    expect(rows[1].title).toBe('Second Title');
    expect(rows[1].content).toBe('Second Content');
    expect(rows[1].author).toBe('Second Post Author');
  });

  it('should insert one join entry into the join table', async () => {
    await database.createPost({ title: 'Third Title', content: 'Third Content', author: 'Third Post Author', topicId: 3 });
    const { rows } = await database.query('SELECT * FROM Topics_in_Posts');
    expect(rows[2].post_id).toBe(3);
    expect(rows[2].topic_id).toBe(3);
  });
});

describe('query to handle retrieving posts', () => {
  it('should retrieve all posts for a given topic id from the posts table', async () => {
    await database.query('DELETE FROM Topics_in_Posts');
    await database.query('DELETE FROM Topics');
    await database.query('DELETE FROM Posts');
    await database.query('ALTER SEQUENCE Topics_id_seq RESTART WITH 1;');
    await database.query('ALTER SEQUENCE Posts_id_seq RESTART WITH 1;');
    await database.createTopic({ name: 'First Topic', description: 'First Description' });
    await database.createPost({
      title: 'First Title',
      content: 'First Content',
      author: 'First Post Author',
      topicId: 1,
    });
    await database.createPost({
      title: 'Second Title',
      content: 'Second Content',
      author: 'Second Post Author',
      topicId: 1,
    });
    await database.createPost({
      title: 'Third Title',
      content: 'Third Content',
      author: 'Third Post Author',
      topicId: 1,
    });
    const rows = await database.getPosts(1);
    console.log(rows);
    expect(rows.length).toBe(3);
    expect(rows[0].title).toBe('First Title');
    expect(rows[0].content).toBe('First Content');
    expect(rows[0].author).toBe('First Post Author');
    expect(rows[1].title).toBe('Second Title');
    expect(rows[1].content).toBe('Second Content');
    expect(rows[1].author).toBe('Second Post Author');
    expect(rows[2].title).toBe('Third Title');
    expect(rows[2].content).toBe('Third Content');
    expect(rows[2].author).toBe('Third Post Author');
  });
});
