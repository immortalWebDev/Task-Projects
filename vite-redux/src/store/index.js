import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByOne(state) {
      state.counter++;
    },
    decrementByOne(state) {
      state.counter--;
    },
    incrementByFive(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrementByFive(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;