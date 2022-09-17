import {AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import {IoBriefcaseOutline, IoNewspaperOutline} from "react-icons/io5";
import {MdRssFeed} from "react-icons/md";

export const navData = [
    {
        id: 0,
        name: 'Home',
        url: '/',
        icon: <AiOutlineHome/>
    },
    {
        id: 1,
        name: 'Projects',
        url: '/projects',
        icon: <IoBriefcaseOutline/>
    },
    {
        id: 2,
        name: 'Resume',
        url: '/resume',
        icon: <IoNewspaperOutline/>
    },
    {
        id: 3,
        name: 'Articles',
        url: '/articles',
        icon: <MdRssFeed/>
    },
    {
        id: 4,
        name: 'Contact',
        url: '/contact',
        icon: <AiOutlineMail/>
    },
]