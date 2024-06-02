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
        counter: state.counter + action.amount,
    }
  }

  if(action.type === 'decrementbyfive'){
    return{
        counter: state.counter - action.amount,
    }
  }

  return state;
};

const store = createStore(counterReducer);

export default store;