import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';


const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter  = useSelector(state => state.showCounter);
  const dispatch = useDispatch();


  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };
  
  const decrementtHandler = () => {
    dispatch({ type: 'decrement' });
  };
  
 const toggleCounterHandler = () => {
  dispatch({ type: 'toggle' });
 };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementtHandler}>Decrement</button>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
