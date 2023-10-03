import React from 'react'
import "./Dashboard.css"
import LeftComponent from '../leftComponent/LeftComponent'
import RightComponent from '../rightComponent/RightComponent'
import MiddleComponent from '../middleComponent/MiddleComponent'

function Dashboard() {
  return (
    <div className='db-outer-box'>
        <LeftComponent/>
        <MiddleComponent/>
        <RightComponent/>
    </div>
  )
}

export default Dashboard