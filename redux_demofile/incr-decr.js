const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.payload,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - action.payload,
    };
  }
};


const store = redux.createStore(counterReducer);

// console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });

store.dispatch({ type: "increment" });

store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });

store.dispatch({ type: "increase", payload: 6 });
store.dispatch({ type: "decrement", payload: 3 });
