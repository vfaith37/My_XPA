import React from 'react';
import * as FaIcons from 'react-icons/fa';
export const SidebarData = [ 
  {
    title: 'Home',
    path: '/',
    icon: <FaIcons.FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Personal Finance Manager',
    path: '/financeManager',
    icon: <FaIcons.FaBriefcase />,
    cName: 'nav-text'
  },
  {
    title: 'Book Reader',
    path: '/bookshelfs',
    icon: <FaIcons.FaBookReader />,
    cName: 'nav-text'
  },
  {
    title: 'Reminder',
    path: '/reminder',
    icon: <FaIcons.FaBell />,
    cName: 'nav-text'
  },
  {
    title: 'To-Do',
    path: '/toDo',
    icon: <FaIcons.FaThList />,
    cName: 'nav-text'
  }
];
