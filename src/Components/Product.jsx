import React, { useState } from 'react'

function Product({ name, price }) {
  const [quantity, setQuantity] = useState(1)
  const total = price * quantity

  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: ${total}</p>
      <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>-</button>
    </div>
  )
}

export default Product