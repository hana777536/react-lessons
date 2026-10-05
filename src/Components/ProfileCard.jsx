import React from 'react'

function ProfileCard({name, age, city}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  )
}

export default ProfileCard