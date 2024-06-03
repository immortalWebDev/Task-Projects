import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter)

const incrementByOne = () => {
  dispatch(counterActions.incrementByOne())
}

const decrementByOne = () => {
  dispatch(counterActions.decrementByOne())
}

const incrementByFive = () => {
  dispatch(counterActions.incrementByFive(5))
}

const decrementByFive = () => {
  dispatch(counterActions.decrementByFive(5))
}

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
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
