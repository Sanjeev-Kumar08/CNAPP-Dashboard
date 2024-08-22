import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faBell, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import './header.css'

function Header() {
  return (
    <div>
        <header className="header">
            <div className="header-item-left">
                <p className='home'>Home</p>
                <p><FontAwesomeIcon icon={faAngleRight} className='angle-icon' /></p>
                <p className='dashboard'>Dashboard V2</p>
            </div>

            <div className="header-item-right">
                <div className="search-container">
                    <input type="text" className="search_bar rounded-lg" placeholder="Search anything..." />
                    <FontAwesomeIcon icon={faSearch} className='search-icon' />
                </div>  
                <FontAwesomeIcon icon={faBell} className="bell-icon" />
            </div>  
        </header>
    </div>
  )
}

export default Header
