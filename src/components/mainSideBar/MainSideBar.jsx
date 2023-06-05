import { useState } from "react";
import { Card, Typography, List, ListItem, ListItemPrefix, Accordion, AccordionHeader, AccordionBody, Input } from "@material-tailwind/react";
import { PresentationChartBarIcon, StarIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Proptypes from 'prop-types';
import { useAppDispath, useAppSelector } from "../../app/hoock";
import { changeRoute } from "../../redux/Slices/RouteSlice";


export default function MainSideBar({ title, options }) {

    return (
        <Card className="left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="border-b border-black flex items-center gap-4 p-1">
                <Typography variant="h7">
                    {title.toUpperCase()}
                </Typography>
            </div>
            <div className="p-2">
                <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
            </div>
            <GenerateList list={options} />
        </Card>
    );
}

const GenerateList = ({ list }) => {
    const [open, setOpen] = useState(1);
    const dispatch = useAppDispath();
    const selectedOption = useAppSelector((state) => state.subRoutePage.data)


    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const handleSubOpen = (value) => {
        dispatch(changeRoute(value))
    }

    return (
        <List>
            {list.map((item, idx) => {
                if (Array.isArray(item?.subOptions)) {
                    return (
                        <Accordion key={idx} open={open === 1} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}>
                            <ListItem >
                                <AccordionHeader onClick={() => handleOpen(1)}>
                                    <ListItemPrefix>
                                        <PresentationChartBarIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal">
                                        {item.label}
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody>
                                <List className="p-0">
                                    {item.subOptions.map((subItem, subIndx) => {
                                        const { label } = subItem
                                        return (
                                            <ListItem key={subIndx + 10} selected={label === selectedOption} className={`px-4 sdsds hover:bg-blue-gray-600 ${label === selectedOption ? 'focus:bg-azul-acero  active:bg-azul-acero bg-azul-acero' : ''}`}
                                                onClick={(e) => handleSubOpen(label, e)}>
                                                <ListItemPrefix>
                                                    <StarIcon strokeWidth={3} className="h-3 w-5" />
                                                </ListItemPrefix>
                                                {label}
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </AccordionBody>
                        </Accordion>
                    )
                }
            })}
        </List>
    )

}


MainSideBar.propTypes = {
    title: Proptypes.string.isRequired,
    options: Proptypes.array.isRequired
}

GenerateList.propTypes = {
    list: Proptypes.array
}