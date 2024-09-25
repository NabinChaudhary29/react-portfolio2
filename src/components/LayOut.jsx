import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export const LayOut = () => {
  return (
    <>
        {/* {Header} */}
        <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        {/* <!-- navbar --> */}
        <Navbar />
        
        {/* {Content} */}
            <div className='main'>
                <Outlet/>
            </div>

        {/* {Footer} */}
        <Footer />

    </div>
    </>
  )
}
