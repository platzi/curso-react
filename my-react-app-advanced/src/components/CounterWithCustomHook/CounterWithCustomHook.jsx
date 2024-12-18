import useCounter from "../../hooks/useCounter";

const CounterWithCustomHook = () => {
  const {
    count,
    increment,
    decrement,
    reset,
  } = useCounter(10);

  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default CounterWithCustomHook;