import { Outlet } from 'react-router-dom'
import NavBarMain from './components/NavBar/NavbarMain'


function App() {
  return (
    <div className="w-screen h-screen flex flex-col ">
      <div className="flex items-center justify-center mb-5 px-8">
        <NavBarMain />
      </div>
      <Outlet />
    </div>
  )
}

export default App
