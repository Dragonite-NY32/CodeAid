import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
// import rootReducer from './reducer'

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});

export default store;