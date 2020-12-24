import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About Me',
    path: '/About',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/Projects',
    icon: <BsIcons.BsLayersFill />,
    cName: 'nav-text'
  },
  {
    title: 'Resume',
    path: '/Resume',
    icon: <BsIcons.BsReverseLayoutTextSidebarReverse />,
    cName: 'nav-text'
  },
  
];
