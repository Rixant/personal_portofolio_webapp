import React, { useState } from 'react';
import * as HiIcons from 'react-icons/hi';
import * as ImIcons from 'react-icons/im';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="my-navigation">
      <IconContext.Provider value={{ color: 'white' }}>
        <div  className='navbar slidable'>
          <Link to='#' className='menu-bars'>
            <HiIcons.HiMenuAlt4 className="menu-circle" onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <ImIcons.ImCancelCircle />
              </Link>
        
            </li>
            {/* <li><h2>Menu</h2></li> */}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
