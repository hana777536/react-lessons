import React from 'react'

function Header() {
  return (
    <div className="header">
      <h1>
        <p  className="small-title">mini project</p>
        <h1> Student Dashboard</h1>
        <p className="subtitle"> 
            manage students

        </p>
      </h1>

        <div className='student-count'>
         <span>Students</span>
        <strong>200</strong>

      </div>

    </div>
  
  )
}

export default Header