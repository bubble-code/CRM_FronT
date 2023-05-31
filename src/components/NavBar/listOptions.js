import {
    ChevronDownIcon, CubeTransparentIcon, Bars3Icon, XMarkIcon, RocketLaunchIcon
} from '@heroicons/react/24/outline'

export const navOptions = [
    // { path: '/', label: 'Inicio' },
    { path: '/nuevo', label: 'Nuevo', icon: <ChevronDownIcon className="h-[18px] w-[18px]" /> },
    { path: '/abiertos', label: 'Abiertos', icon: <CubeTransparentIcon className="h-[18px] w-[18px]" /> },
    { path: '/buscar', label: 'Buscar', icon: <Bars3Icon className="h-[18px] w-[18px]" /> },
    { path: '/busqueda', label: 'Busqueda', icon: <XMarkIcon className="h-[18px] w-[18px]" /> },
    { path: '/config', label: 'Config', icon: <RocketLaunchIcon className="h-[18px] w-[18px]" /> },
];
