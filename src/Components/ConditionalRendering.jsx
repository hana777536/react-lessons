import React from 'react'

function ConditionalRendering() {

    const isLoggedIn = true;
    const isAdmin = false;
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
        <div>
          {isAdmin ? <p>Welcome, Admin!</p> : <p>You do not have admin privileges.</p>}
        </div>
      
    </div>
  )
}

export default ConditionalRendering