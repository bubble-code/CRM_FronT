import { Outlet } from 'react-router-dom'
import NavBarMain from './components/NavBar/NavbarMain'


function App() {
  return (
    <div className="mx-auto max-w-[1700px] h-screen flex flex-col ">
      <div className="flex items-center justify-center mb-5 w-full">
        <NavBarMain />
      </div>
      <Outlet />
    </div>
  )
}

export default App
