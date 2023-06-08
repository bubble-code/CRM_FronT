import { createElement, useEffect, useState } from "react";
import { Card, Typography, List, ListItem, ListItemPrefix, Accordion, AccordionHeader, AccordionBody, Input } from "@material-tailwind/react";
import { PresentationChartBarIcon, StarIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon, MagnifyingGlassIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline";
import Proptypes from 'prop-types';
import { useAppDispath, useAppSelector } from "../../app/hoock";
import { changeRoute } from "../../redux/Slices/RouteSlice";
import { useNavigate } from "react-router-dom";


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
    const navigate = useNavigate()

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

    const handleSubOpen = (value, option) => {
        dispatch(changeRoute(value))
        navigate(`${option.link}`)
    }

    const renderIcon = (icon) => {
        return createElement(icon, {
            className: "h-5 w-5"
        })
    }

    const renderListItemsHeader = (label, idx, handleOpen) => {
        return (
            <ListItem className={`h-12 ${idx === 0 ? '' : 'ml-4 w-[90%]'} `}>
                <AccordionHeader onClick={() => handleOpen(idx)}>
                    <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-auto font-normal">
                        {label}
                    </Typography>
                </AccordionHeader>
            </ListItem>
        )
    }
    let index = 0


    const renderOptions = (options) => {
        return options.map((option, idx) => {
            const { label, subOptions } = option;
            if (Array.isArray(subOptions)) {
                return (
                    <Accordion key={index} open={!!open[index]} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 rotate-90 transition-transform ${open[index] ? "rotate-90" : ""}`} />} className="m-0 p-0">
                        {renderListItemsHeader(label, index, handleOpen)}
                        <AccordionBody>
                            {renderOptions(subOptions, ++index)}
                        </AccordionBody>
                    </Accordion>
                )
            }
            return (
                <ListItem key={idx + 10} selected={label === selectedOption} className={`hover:bg-blue-gray-600 ml-9 w-56 ${label === selectedOption ? 'focus:bg-azul-acero  active:bg-azul-acero bg-azul-acero' : ''}`}
                    onClick={(e) => handleSubOpen(label, option)}>
                    <ListItemPrefix>
                        <StarIcon strokeWidth={3} className="h-3" />
                    </ListItemPrefix>
                    {label}
                </ListItem>
            )


        })
    }


    return (
        <List className="w-full">
            {renderOptions(list)}
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