// import { useState } from 'react'
import Homepage from './pages/Homepage'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route}from 'react-router-dom'
import Issue_certificate from './pages/Issue_certificate'
import Viewcertificate from './pages/Viewcertificate'
import Mainlayout from './layout/Mainlayout'

function App() {
  // const [count, setCount] = useState(0)
  const router=createBrowserRouter(
    createRoutesFromElements(
     <>        
         <Route path='/' element={<Mainlayout/>}>
         <Route path='/' element={<Homepage/>}/> 
        <Route path='/certificate' element={<Issue_certificate/>}/>
        <Route path='/certificate/:id' element={<Viewcertificate/>}/>
        
       </Route>
       </>


    )
  )
  

  return (
    <>
    <RouterProvider router={router}/>
       
    </>
  )
}

export default App
