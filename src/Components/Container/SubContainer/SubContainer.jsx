import React from 'react'
import CSPM from '../../Sections/CSPM Dashboard/CSPM'
import CWPP from '../../Sections/CWPP Dashborad/CWPP'
import BuisnessMatrices from '../../Sections/BuisnessMatrices/BuisnessMatrices'

import './SubContainer.css'

function SubContainer() {
  return (
    <div className='subContainer'>
      <CSPM/> 

      <CWPP/>

      <BuisnessMatrices/>
    </div>
  )
}

export default SubContainer
