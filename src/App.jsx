import React from 'react'
import Header from './Components/Header/Header'
import MainContainer from './Components/Container/MainContainer/MainContainer'

import './App.css'


function App() {
  return (
    <>
      <div className='container'>
        
        <Header/>

        <div className='main_container'>
          <MainContainer/>
        </div>

      </div>
    </>
  )
}

export default App;
