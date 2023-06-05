import { Divider, Typography } from "antd"
import { useAppSelector } from '../../app/hoock'



export const TitleSubPage = () => {

    const title = useAppSelector((state) => state.subRoutePage.data);

    return (
        <div className="w-full">
            <Typography>
                {title}
            </Typography>
            <Divider className="border-black" />
        </div>
    )
}
