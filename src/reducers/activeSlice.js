import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    topicActive(state, action) {
      // This "mutating" code is okay inside of createSlice!
      state.push(action.payload)
    },
    topicInactive(state, action) {
      // const topic = state.find(topic => topic.id === action.payload)
   
    },
  }
})

export const { topicActive, topicInactive } = topicSlice.actions

export default activeSlice.reducer;