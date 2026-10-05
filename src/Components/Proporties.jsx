import React from 'react'

function Properties({ name, size, isSold }) {

    const realEstate = [
      { name: 'apartment', size: 'small', isSold: true },
      { name: 'home', size: 'large', isSold: false },
      { name: 'office', size: 'medium', isSold: true }
    ]

  return (
    <div>
      <h1>{name}</h1>
      <p>{size}</p>
      <p>{isSold ? "sold" : "not sold"}</p>
    </div>
  )
}


export default Properties