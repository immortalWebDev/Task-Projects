import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter);

const incrementByOne = () => {
  dispatch({type: 'incrementbyone'})
}

const decrementByOne = () => {
  dispatch({type: 'decrementbyone'})
}

const incrementByFive = () => {
  dispatch({type: 'incrementbyfive', amount: 5})
}

const decrementByFive = () => {
  dispatch({type: 'decrementbyfive', amount: 5})
}

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
