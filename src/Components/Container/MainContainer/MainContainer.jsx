import React , { useState }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowsRotate, faEllipsisVertical, faClock, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../SideBar/SideBar';
import SubContainer from '../SubContainer/SubContainer'

import './mainContainer.css'

function Main() {

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
    <div className='mainContainer'>
      
      <Sidebar isVisible={isSidebarVisible} onClose={toggleSidebar} />

      <div className='heading_Container_left'>
        <p className='CNAPP_Dashboard'>CNAPP Dashboard</p>
      </div>

      <div className='heading_Container_right'>
        <div className='addWidgetBtn'>
          <button onClick={toggleSidebar}>
              Add Widget
              <FontAwesomeIcon icon={faPlus} className='plusIcon'/>
          </button>
        </div>

        <div className='refreshBtn'>
          <button>
            <FontAwesomeIcon icon={faArrowsRotate} className='refreshIcon'/>
          </button>
        </div>
        
        <div className='dotsBtn'>
          <button>
            <FontAwesomeIcon icon={faEllipsisVertical} className='dotIcon'/>
          </button>
        </div>

        <div className='dropdownContainer'>
          <FontAwesomeIcon icon={faClock} /> <hr className='hr_Line'/>
          <p>Last 2 Days</p> 
          <FontAwesomeIcon icon={faAngleDown} className='angleDownIcon'/>
        </div>
      </div>
    </div>

    <SubContainer/>
    </>
  )
}

export default Main
