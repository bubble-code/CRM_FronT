import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Typography } from "@material-tailwind/react"
// import { navOptions } from "./listOptions"

export const NavList = (list) => {
    const location = useLocation()
    const path = location.pathname;
    console.log(path)
    // const pathName = location.pathname

    return (<nav className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6" >
        {list.map(item => (
            <div key={item.label} className={`flex w-28 items-center transition-all duration-300 ease-in-out rounded-xl ${path.includes(item.path) ? 'bg-azul-acero text-white' : ''}  justify-center px-2 py-1`} >
                {item.icon}
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal hover:text-blue-600"
                >
                    <NavLink className="flex items-center" to={item.path}>
                        {item.label}
                    </NavLink>
                </Typography>
            </div>
        ))}
    </nav>)
}
