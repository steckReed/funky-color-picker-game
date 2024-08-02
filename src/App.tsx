import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const counter = (()=>{
    function add(){ setCount(count + 1); }
    function subtract() { setCount(count - 1); }

    return {add, subtract}
  })();

  return (<>
    <div>
      <div style={{ display:'flex', gap:'12px' }}>
        <button onClick={counter.add}>+</button>
        <button onClick={counter.subtract}>-</button>
      </div>

      <h3>count is {count}</h3>
    </div>
  </>)
}

export default App
