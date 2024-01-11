// Header.js
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import Sidebar from './Sidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const sidebarRef = useRef(null);

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="header">
      <div className="burger-icon" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
  
      <h1>Cenozai</h1>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} ref={sidebarRef} />
    </div>
  );
};

export default Header;
