import { Typography } from "antd"
import { useLocation } from 'react-router-dom'


export const TitleSubPage = () => {

    const location = useLocation()
    const { pathname } = location;
    const title = pathname.split('/').slice(-1).join();

    return (
        <div className="w-full mt-2">
            <span className="mt-4 border rounded-lg text-blue-500 font-extralight uppercase text-xs tracking-wider border-blue-500  p-2 px-4">{title}</span>
        </div>
    )
}
