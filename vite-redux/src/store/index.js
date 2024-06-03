import { createStore } from 'redux';

//Action type constants
export const INCREMENT_BY_ONE = 'incrementByOne';
export const DECREMENT_BY_ONE = 'decrementByOne';
export const INCREMENT_BY_FIVE = 'incrementByFive';
export const DECREMENT_BY_FIVE = 'decrementByFive';
export const TOGGLE_COUNTER = 'togglecounter';

const initialState = { counter: 0,showCounter : true }
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT_BY_ONE) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === DECREMENT_BY_ONE) {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if(action.type === INCREMENT_BY_FIVE){
    return{
        ...state,
        counter: state.counter + action.amount,
    }
  }

  if(action.type === DECREMENT_BY_FIVE){
    return{
        ...state,
        counter: state.counter - action.amount,
    }
  }

  if(action.type === TOGGLE_COUNTER){
    return{
        ...state,
        showCounter: !state.showCounter,
    }
  }

  return state;
};

const store = createStore(counterReducer);

export default store;