import { NavLink } from "react-router-dom"
import { Typography } from "@material-tailwind/react"
// import { navOptions } from "./listOptions"

export const NavList = (list) => {
    // const location = useLocation()

    // const pathName = location.pathname

    return (<nav className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6" >
        {list.map(item => (
            <div key={item.label} className="flex w-[100px] items-center">
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
