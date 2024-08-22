import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple} from '@fortawesome/free-solid-svg-icons';
import './noData.css'

function NoData() {
  return (
    <div className='noDataCard'>
        <div className='iconContainer'>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/000000/combo-chart--v1.png" className='chartLineIcon'/>
        </div>
        <div>
            <p className='headline'>No Graph data available!</p>
        </div>
    </div>
  )
}

export default NoData
