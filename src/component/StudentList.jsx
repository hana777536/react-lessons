import React, { useState } from 'react'

function StudentList({icon, course, name, presence, grade, results, projects, progress}  ) {
 
    const [attendance, setAttendance] = useState(false)

  return (
    <div className='student-card' >
      <h2>{name}</h2>
      <p> {icon}</p>
      <p>Course: {course}</p>
      <p>Presence: {presence}</p>
      <p>Grade: {grade}</p>
      <p>Results: {results}</p>
      <p>Projects: {projects}</p>
      <p>Progress: {progress}</p>

      <button className='attendance-button' onClick={() => setAttendance(!attendance)}>
        {attendance ? 'Mark as Absent' : 'Mark as Present'}
      </button>
    </div>
  )
}

export default StudentList