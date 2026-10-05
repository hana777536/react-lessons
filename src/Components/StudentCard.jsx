import React, { useState } from 'react'

function StudentCard({ name, course }) {
  const [isPresent, setIsPresent] = useState(false)

  function handleAttendance() {
    setIsPresent(!isPresent)
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>{course}</p>
      <p>Status: {isPresent ? 'present' : 'absent'}</p>

      <button onClick={handleAttendance}>
        {isPresent ? 'Mark Absent' : 'Mark Present'}
      </button>
    </div>
  )
}

export default StudentCard