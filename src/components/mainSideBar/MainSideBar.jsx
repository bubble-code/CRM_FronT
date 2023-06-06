import { useEffect, useState } from "react";
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
                <Typography variant="h6">
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
    const [open, setOpen] = useState([]);
    const dispatch = useAppDispath();
    const selectedOption = useAppSelector((state) => state.subRoutePage.data)

    useEffect(() => {
        const inittialState = new Array(list.length).fill(false)
        setOpen(inittialState)
    }, [list])


    const handleOpen = (index) => {
        setOpen((prevOpen) => {
            const newState = [...prevOpen];
            newState[index] = !newState[index]
            return newState
        });
    };

    const handleSubOpen = (value) => {
        dispatch(changeRoute(value))
    }

    return (
        <List>
            {list.map((item, idx) => {
                const { label } = item
                if (Array.isArray(item.subOptions)) {
                    return (
                        <Accordion key={idx} open={!!open[idx]} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open[idx] ? "rotate-180" : ""}`} />}>
                            {renderListItemsHeader(item, idx, handleOpen)}
                            <AccordionBody>
                                {item.subOptions.map((subItem, subIndx) => {
                                    const { label } = subItem
                                    if (Array.isArray(subItem.subOptions)) {
                                        // console.log(subItem.subOptions)
                                        const index = subIndx + idx + 1
                                        return (
                                            <List key={subIndx + 22}>
                                                <Accordion key={index} open={!!open[index]} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open[index] ? "rotate-180" : ""}`} />}>
                                                    {renderListItemsHeader(subItem, index, handleOpen)}
                                                    <AccordionBody>
                                                        <List className="p-0">
                                                            {subItem.subOptions.map((subsubItem, subsubIndex) => {
                                                                return renderListItemsBody(subsubItem, subsubIndex, selectedOption, handleSubOpen)
                                                            })}
                                                        </List>
                                                    </AccordionBody>
                                                </Accordion>
                                            </List>
                                        )
                                    }

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
                            </AccordionBody>
                        </Accordion>
                    )
                }
                return (
                    <ListItem key={idx + 10} selected={label === selectedOption} className={`px-4 sdsds hover:bg-blue-gray-600 ${label === selectedOption ? 'focus:bg-azul-acero  active:bg-azul-acero bg-azul-acero' : ''}`}
                        onClick={(e) => handleSubOpen(label, e)}>
                        <ListItemPrefix>
                            <StarIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        {label}
                    </ListItem>
                )
            })}
        </List>
    )

}


const renderListItemsHeader = (item, idx, handleOpen) => {

    return (
        <ListItem >
            <AccordionHeader onClick={() => handleOpen(idx)}>
                <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                    {item.label}
                </Typography>
            </AccordionHeader>
        </ListItem>
    )
}

const renderListItemsBody = (subsubItem, subIndx, selectedOption, handleSubOpen) => {
    const subsubLabel = subsubItem["label"]
    return (
        <ListItem key={subIndx + 10} selected={subsubLabel === selectedOption} className={`px-4 sdsds hover:bg-blue-gray-600 ${subsubLabel === selectedOption ? 'focus:bg-azul-acero  active:bg-azul-acero bg-azul-acero' : ''}`}
            onClick={(e) => handleSubOpen(subsubLabel, e)}>
            <ListItemPrefix>
                <StarIcon strokeWidth={3} className="h-3 w-5" />
            </ListItemPrefix>
            {subsubItem.label}
        </ListItem>
    )
}

MainSideBar.propTypes = {
    title: Proptypes.string.isRequired,
    options: Proptypes.array.isRequired
}

GenerateList.propTypes = {
    list: Proptypes.array
}