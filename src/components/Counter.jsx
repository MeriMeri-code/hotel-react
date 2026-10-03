import { useReducer } from "react";
function reducer(state, action) {
  if (action.type === "increment") {
    return state + 1;
  }

  if (action.type === "decrement") {
    return state - 1;
  }

  return state;
}
function Counter() {
const [count, dispatch] = useReducer(reducer, 0);
 
 return (
    <>
      <p>{count}</p>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
    </>
  );
}
export default Counter;
