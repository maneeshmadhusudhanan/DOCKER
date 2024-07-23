import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <>
    <div className='flex flex-row justify-end p-4'>
        <Link to="/" className="border-1 bg-cyan-700 px-8 py-2  mr-2">Home</Link>
        <Link to="/certificate" className="border-1  px-8 py-2 " >Issue Certificate</Link>
    </div>
       


    </>
   
  )
}

export default Navbar
