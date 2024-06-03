import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { INCREMENT_BY_ONE,DECREMENT_BY_ONE,INCREMENT_BY_FIVE,DECREMENT_BY_FIVE, TOGGLE_COUNTER } from '../store';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter)

const incrementByOne = () => {
  dispatch({type: INCREMENT_BY_ONE})
}

const decrementByOne = () => {
  dispatch({type: DECREMENT_BY_ONE})
}

const incrementByFive = () => {
  dispatch({type: INCREMENT_BY_FIVE, amount: 5})
}

const decrementByFive = () => {
  dispatch({type: DECREMENT_BY_FIVE, amount: 5})
}

  const toggleCounterHandler = () => {
    dispatch({type:TOGGLE_COUNTER})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementByOne}>Increment 1</button>
        <button onClick={decrementByOne}>Decrement 1</button>
        <button onClick={incrementByFive}>Increment 5</button>
        <button onClick={decrementByFive}>Decrement 5</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
