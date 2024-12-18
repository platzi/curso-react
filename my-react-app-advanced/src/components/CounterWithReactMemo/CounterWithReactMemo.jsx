import React, { useState, useCallback, useMemo } from "react";

const Child = React.memo(({ counter }) => {
  console.log("Renderizando Child")
  return <p>Contador: {counter}</p>
})

function ExpensiveCalculation({ num }) {
  const result = useMemo(() => {
    console.log("Calculando...")
    return num * 2;
  }, [num])

  return <p>Resultado: {result}</p>
}

function CounterWithReactMemo() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(prev => prev + 1)
  })

  return (
    <div>
      <button onClick={increment}>
        Incrementar
      </button>
      <Child counter={counter} />
      <ExpensiveCalculation num={counter} />
    </div>
  )
}

export default CounterWithReactMemo;