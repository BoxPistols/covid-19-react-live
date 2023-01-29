import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  return (
    <div className="Counter">
      <h1>Count: {count}</h1>
      <button onClick={increment}>Up</button>
      <button onClick={decrement}>Down</button>
    </div>
  )
}

export default Counter
