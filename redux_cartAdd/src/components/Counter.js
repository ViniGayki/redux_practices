import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { configureStore, createSlice, createStore } from "@reduxjs/toolkit";
import { counterActions } from '../store/index';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const showCounter= useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();


  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  // const decrementtHandler = () => {
  //   dispatch(counterActions.decrement()); 
  // };

  //  const incressHandler = () =>{
  //   dispatch (counterActions.increase(5));
  //   }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}

      <button onClick={incrementHandler}>Increment</button>

      <button onClick={() => {
        dispatch(counterActions.decrement());
      }}>Decrement</button>

      <button onClick={() => {
        dispatch(counterActions.increase(5));
      }}>Increase</button>

      <button onClick={()=>{
         dispatch(counterActions.toggleCounter());
      }}>Showtoggle</button>

    </main>
  );
};

export default Counter;
