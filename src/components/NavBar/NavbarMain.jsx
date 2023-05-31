

import { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";
import { NavLink, useLocation } from "react-router-dom";
import { CubeTransparentIcon, Bars3Icon, XMarkIcon, CurrencyEuroIcon, IdentificationIcon, BuildingStorefrontIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { NavList } from "./NavList";
import NavListMenu from "./NavListOptions";
import { Collapse } from "antd";

export default function NavbarMain() {
    const [openNav, setOpenNav] = useState(false);
    const location = useLocation()

    const pathName = location.pathname

    const navOptions = [
        // { path: '/', label: 'Inicio' },
        //icon: <ChevronDownIcon className="h-[18px] w-[18px]" />
        { path: '/presupuesto', label: 'Presupuesto', icon: <CurrencyEuroIcon className="h-[18px] w-[18px]" /> },
        { path: '/articulos', label: 'Articulos', icon: <IdentificationIcon className="h-[18px] w-[18px]"></IdentificationIcon> },
        { path: '/of', label: 'Orden Fab', icon: <CubeTransparentIcon className="h-[18px] w-[18px]" /> },
        { path: '/calidad', label: 'Calidad', icon: <QuestionMarkCircleIcon className="h-[18px] w-[18px]" /> },
        // { path: '/config', label: 'Config', icon: <RocketLaunchIcon className="h-[18px] w-[18px]" /> },
    ];


    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);



    return (
        <Navbar className="py-2 px-2 lg:px-2 lg:py-4 text-gray-950 w-full">
            <nav className=" mx-auto flex items-center justify-between">
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal hover:border-b-blue-500 border-b"
                >
                    <NavLink to={'/'}>HOME</NavLink>
                </Typography>
                <div className="hidden lg:block">{NavList(navOptions)}</div>
                <div className="hidden lg:block">{NavListMenu()}</div>
                <Button variant="gradient" size="sm" className="hidden lg:inline-block text-gray-950">
                    <span>Logout</span>
                </Button>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />navList
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </nav>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {NavList(navOptions)}
                    <Button variant="gradient" size="sm" fullWidth className="mb-2">
                        {/* <span>Buy Now</span> */}
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
}