import React from 'react'

const EvenOdd = () => {
    const numbers = [1,2,3,4,5,6,7,8];
  return (
    <div>
        {
        numbers.filter(num => num % 2 === 0)
        .map((elm,index) => (
            <h2 key={index}>{elm}</h2>
        ))
        }
    </div>
  )
}

export default EvenOdd