import { act } from 'react';
import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'incrementbyone') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrementbyone') {
    return {
      counter: state.counter - 1,
    };
  }

  if(action.type === 'incrementbyfive'){
    return{
        counter: state.counter + 5,
    }
  }

  if(action.type === 'decrementbyfive'){
    return{
        counter: state.counter - 5,
    }
  }

  return state;
};

const store = createStore(counterReducer);

export default store;