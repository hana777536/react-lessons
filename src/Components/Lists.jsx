import React from 'react'

function Lists() {
    const student = ["zana", "xhenis", "hana"];
  return (
    <div>
    <h1>this is the list of students</h1>
    <ul>
      {student.map((student) => (
        <li key={student}>{student}</li>
      ))}
    </ul>
    </div>
  )
}

export default Lists