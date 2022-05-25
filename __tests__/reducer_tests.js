import topicReducer, {
  activate,
  initialState,
} from '../src/reducers/topicSlice';

describe('reducer tests', () => {
  describe('topicSlice.js', () => {
    test('reducer should return initial state', () => {
      expect(topicReducer(undefined, {})).toEqual(initialState);
    });

    test('activate reducer works as expected', () => {
      const previousState = [
        { name: 'Topic1', description: 'description1', id: 1234, active: true },
        {
          name: 'Topic2',
          description: 'description2',
          id: 12345,
          active: false,
        },
      ];
      const newState = topicReducer(previousState, activate('Topic2'));
      expect(newState[0].active).toBe(false);
      expect(newState[1].active).toBe(true);
    });
  });
});
