import React from 'react'
import ProfileCard from './Components/ProfileCard'
import CourseCard from './Components/CourseCard';
import Counter from './Components/Counter';
import LikeCounter from './Components/LikeCounter';
import StudentCard from './Components/StudentCard';
import Product from './Components/Product';


 const technologies = ['React', 'JavaScript', 'HTML'];
const students = [
  { id: 1,
   name: 'hana'
   },
  { id: 2,
     name: 'zana' 
    }
];

function App() {
  return (
    <div>
      {technologies.map((technology) => (
        <p key={technology}>{technology}</p>
      ))}

      {students.map((student) => (
        <p key={student.id}>{student.name}</p>
      ))}

      <ProfileCard name="hana" age={25} city="vushtrri" />
      <ProfileCard name="zana" age={30} city="prishtina" />
      <ProfileCard name="linda" age={28} city="peja" />

      <div>
        <h2>course card</h2>
        <CourseCard title="reactJs" instruction="egzon" duration="12 weeks" price={299} />
      </div>

      <Counter />
      <LikeCounter />
      <div>
        <StudentCard name={"xhenis"} course={"react"}/>
         <StudentCard name={"hana"} course={"react"}/>
          <StudentCard name={"zana"} course={"react"}/>
      </div>
      <Product name={"laptop"} price={1000}/>
    </div>
  );
}

export default App