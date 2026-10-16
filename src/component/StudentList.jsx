import React, { useState } from 'react'

function StudentList({ icon, course, name, presence, grade, results, projects, progress }) {
  const [attendance, setAttendance] = useState(presence === 'Present')

  const initials = name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const presenceStatus = attendance ? 'Present' : 'Absent'

  return (
    <div className='student-card'>
      <h2>{name}</h2>
      <p>{initials || icon}</p>
      <p>Course: {course}</p>
      <p>Presence: {presenceStatus}</p>
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

