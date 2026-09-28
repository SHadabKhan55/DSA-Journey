import React, { useEffect, useState } from 'react'

const UseEffect = () => {
   const [num,setNum] = useState(0)
   useEffect(() => {
    console.log("component mount")
    
    return () => {
        console.log("component unmount")
    }
   },[])
   useEffect(() => {
    console.log("component update",num)

    return () => console.log("count change",num)
   },[num])
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  )
}

export default UseEffect