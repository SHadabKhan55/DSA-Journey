import React, { useState } from 'react'
import UseEffect from './components/UseEffect'

const App = () => {
 const [data, setData] = useState(true)
  return (
    <div>
      <button onClick={() => setData(!data)}>Toogle</button>
      {data ? <UseEffect/> : ""}
    </div>
  )
}

export default App