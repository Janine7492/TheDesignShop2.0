import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Weekly Recommendations",
        path: "/weekly",
        icon: <BsIcons.BsInfoCircle />,
        cName: "nav-text"
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <MdIcons.MdOutlineMessage />,
        cName: "nav-text"
    },
    {
        title: "The Design Blog",
        path: "/tdb",
        icon: <BsIcons.BsPeople />,
        cName: "nav-text"
    },
    {
        title: "Work with us",
        path: "/wwu",
        icon: <FaIcons.FaHandsHelping />,
        cName: "nav-text"
    },
    {
        title: "Newsletter",
        path: "/newsletter",
        icon: <FaIcons.FaRegNewspaper />,
        cName: "nav-text"
    },
]