import React from 'react'
import "./App.css"
import Header from './component/Header'
import StatCard from './component/StatCard'
import Statistics from './component/Statistics'
import StudentList from './component/StudentList'

function App() {
  return (
    <div className='app'>
      <Header/>
      <Statistics/>
      <StudentList icon="HK" course="JavaScript" name="Hana Krasniqi" presence="Present" grade="A" results="Pass" projects="Project 1" progress="80%"/>
    </div>
  )
}

export default App