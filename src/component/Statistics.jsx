import React from 'react'
import StatCard from './StatCard'

function Statistics() {
  return (
    <div className="statistics">
        <StatCard title="Total Students" stat="30%" value="30" color="blue"/>
         <StatCard title="Present Students" stat="30%" value="30" color="green"/>
        <StatCard title="Total Classes" stat="30%" value="30" color="yellow"/>
        <StatCard title="Total Students" stat="30%" value="30" color="orange"/>


    </div>
  )
}

export default Statistics