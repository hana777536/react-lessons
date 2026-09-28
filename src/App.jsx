import React from 'react'


 const technologies = ['React', 'JavaScript', 'HTML'];
const students = [
  { id: 1,
   name: 'hana'
   },
  { id: 2,
     name: 'zana' 
    }
];

function App(){

  return (
    <div>
      {
        technologies.map((technology) => (
          <p key={technology}> {technology} </p>
        ))
      }
  {
        students.map((student) => (
          <p key={student.id} > {student.name} </p>
        ))
  }

    </div>


  )
}


export default App