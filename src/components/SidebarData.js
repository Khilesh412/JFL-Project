
import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as Io5Icons from "react-icons/io5";
import * as mdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome className="svg-color"/>,
        cName: 'nav-text'
    },  
    {
        title: 'My Order',
        path: '/myorder',
        icon: <FaIcons.FaCartPlus className="svg-color"/>,
        cName:'nav-text'
    },
    {
        title: 'Offers',
        path: '/offers',
        icon: <mdIcons.MdOutlineLocalOffer className="svg-color" />,
        cName:'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <IoIcons.IoMdContact className="svg-color" />,
        cName:'nav-text'
    },
    {
        title: 'Addresses',
        path: '/address',
        icon: <FaIcons.FaAddressCard className="svg-color" />,
        cName:'nav-text'
    },
    {
        title: 'KYC',
        path: '/kyc',
        icon: <Io5Icons.IoFingerPrint className="svg-color"/>,
        cName:'nav-text'
    },
    {
        title: 'Favourites',
        path: '/favourites',
        icon: <AiIcons.AiFillHeart className="svg-color"/>,
        cName:'nav-text'
    },
    {
        title: 'Credit Management',
        path: '/creditmanagement',
        icon: <AiIcons.AiOutlineCreditCard className="svg-color"/>,
        cName:'nav-text'
    },
    {
        title: 'Refer to Friend',
        path: '/refer',
        icon: <FaIcons.FaUserFriends className="svg-color"/>,
        cName:'nav-text'
    },
    // {
    //     title: 'Feedback',
    //     path: '/feedback',
    //     icon: <FaIcons.FaUserFriends className="svg-color"/>,
    //     cName:'nav-text'
    // },
    {
        title: 'ContactUs',
        path: '/contactus',
        icon: <FaIcons.FaUserFriends className="svg-color"/>,
        cName:'nav-text'
    },
    {
        title: 'AboutUs',
        path: '/aboutus',
        icon: <FaIcons.FaUserFriends className="svg-color"/>,
        cName:'nav-text'
    }
]