
import Firstlayout from './Layout/Firstlayout'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Signuppage from './pages/Signuppage'
import Indexpage from './pages/Indexpage'
import Loginpage from './pages/Loginpage'
import RecipiePage from './pages/RecipiePage'
import Mainlayout from './Layout/Mainlayout'
import Addrecipe from './pages/Addrecipe'
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>    
        <Route path='/' element={<Firstlayout/>}>
        <Route index element={<Indexpage/>}/>
        <Route path='/signup' element={<Signuppage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
      </Route>
        <Route path='/' element={<Mainlayout/>}>
        <Route path='/home' element={<RecipiePage/>}/>
        <Route path='/add-recipie' element={<Addrecipe/>}/>
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
