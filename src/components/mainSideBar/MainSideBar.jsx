import React, { useState, useEffect } from "react";
import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody, Input } from "@material-tailwind/react";
import { PresentationChartBarIcon, StarIcon, Cog6ToothIcon, InboxIcon, PowerIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Proptypes from 'prop-types';


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
    const [subOpen, setSubOpen] = useState(0);
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const handleSubOpen = (value, e) => {
        console.log(e)
        e.preventDefault()
        setSubOpen(value)
    }

    const handleHover = (e) => {
        e.preventDefault()
        console.log(e.target)
        e.target.style.backgroundColor = e.target.key === subOpen ? 'bg-azul-acero' : 'transparent'
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
                                        return (
                                            <ListItem key={subIndx + 10} selected={subOpen === subIndx} className={`px-4 sdsds hover:bg-blue-gray-600 active:bg-azul-acero`} onClick={(e) => handleSubOpen(subIndx, e)}>
                                                <ListItemPrefix>
                                                    <StarIcon strokeWidth={3} className="h-3 w-5" />
                                                </ListItemPrefix>
                                                {subItem.label}
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