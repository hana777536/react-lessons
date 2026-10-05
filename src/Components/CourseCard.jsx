import React from 'react'

function CourseCard({title, instruction, duration, price}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{instruction}</p>
      <p>Duration: {duration}</p>
      <p>Price: ${price}</p>
    </div>
  )
}

export default CourseCard