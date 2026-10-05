import React from 'react'
import Product from './Product'

function ObjectList() {
  const products = [
    { id: 1, name: 'iphone 13', color: 'red' },
    { id: 2, name: 'iphone 14', color: 'blue' },
    { id: 3, name: 'iphone 15', color: 'black' },
  ]

  return (
    <div>
      <h1>Object List</h1>

      {products.map((product) => (
        <Product
          key={product.id}
          productName={product.name}
          productColor={product.color}
        />
      ))}
    </div>
  )
}

export default ObjectList