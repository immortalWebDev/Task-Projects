import { createStore } from 'redux';

//Action type constants
export const INCREMENT_BY_ONE = 'incrementByOne';
export const DECREMENT_BY_ONE = 'decrementByOne';
export const INCREMENT_BY_FIVE = 'incrementByFive';
export const DECREMENT_BY_FIVE = 'decrementByFive';


const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === INCREMENT_BY_ONE) {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === DECREMENT_BY_ONE) {
    return {
      counter: state.counter - 1,
    };
  }

  if(action.type === INCREMENT_BY_FIVE){
    return{
        counter: state.counter + action.amount,
    }
  }

  if(action.type === DECREMENT_BY_FIVE){
    return{
        counter: state.counter - action.amount,
    }
  }

  return state;
};

const store = createStore(counterReducer);

export default store;