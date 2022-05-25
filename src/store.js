import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import topicSlice from './reducers/topicSlice';
// import rootReducer from './reducer'

const store = configureStore({
  reducer: {
    topics: topicSlice
  },
});

export default store;