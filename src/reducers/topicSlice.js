import { createSlice } from '@reduxjs/toolkit';

export const initialState = [
  {
    name: 'React',
    description: 'The front-end framework we all know and love',
    id: 1,
    active: true,
  },
  {
    name: 'Redux',
    description: 'The state-management framework we all know and love',
    id: 2,
    active: false,
  },
  {
    name: 'Express',
    description: 'The back-end framework we all know and love',
    id: 3,
    active: false,
  },
  {
    name: 'Pets',
    description: 'Animals are friendly for the house',
    id: 4,
    active: false,
  },
];

export const topicSlice = createSlice({
  name: 'Topics',
  initialState,
  reducers: {
    // the activate function gives the topic you click the 'active' state,
    // which is used to highlight it in the sidebar.
    activate: (state, action) => {
      const topicToDeactivate = state.find(
        (element) => element.active === true
      );
      topicToDeactivate.active = false;
      // action.payload is the name of the topic to activate
      const topicToActivate = state.find(
        (element) => element.name === action.payload
      );
      topicToActivate.active = true;
    },
    loadTopics: (state, action) => {
      console.dir(state);
      // console.log('loadTopics hit');
      console.log('action.payload:', action.payload);
      // const topics = [];
      // for (let i = 0; Object.values(action.payload).length; i++) {
      //   const oldTopic = Object.values(action.payload)[i];
      //   topics.push({ ...oldTopic, active: false });
      // }
      state = action.payload;
      return state;
    }
  },
});

// Action creators are generated for each case reducer function
export const { activate, loadTopics } = topicSlice.actions;

export default topicSlice.reducer;
