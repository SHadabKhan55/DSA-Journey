import React from 'react'

const Candidates = () => {
    const candidates = [
    { name: "Ali", score: 80 },
    { name: "Ahmed", score: 60 },
    { name: "Samad", score: 90 }
  ];

  return (
    <div>
      {candidates.map(c => (
        <>
        <h2>Name: {c.name}</h2>
        <p>Score: {c.score} <strong
        style={{color:c.score >= 70 ? "green" : "red"}}
        >{c.score >= 70 ? "selected" : "rejected"}</strong></p>
        <hr />
        </>
      ))}
    </div>
  )
}

export default Candidates