import { configureStore } from '@reduxjs/toolkit';
import topicSlice from './reducers/topicSlice';

const store = configureStore({
  reducer: {
    topics: topicSlice,
  },
});

export default store;
