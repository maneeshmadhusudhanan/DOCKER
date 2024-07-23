import React from 'react'
import NavbarHomepage from '../components/NavbarHomepage'
import { Outlet } from 'react-router-dom'
const Mainlayout = () => {
  return (
   <>
   <NavbarHomepage/>
   <Outlet/>
   </>
  )
}
export default Mainlayout
