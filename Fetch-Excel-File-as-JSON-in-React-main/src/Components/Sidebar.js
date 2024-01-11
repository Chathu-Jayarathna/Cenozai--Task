// Sidebar.js
import React from 'react';


const Sidebar = ({ isOpen, onClose }) => {
  const sidebarClass = isOpen ? 'sidebar open' : 'sidebar';

  return (
    <div className={sidebarClass}>
      <button className="close-button" onClick={onClose}>
       
      </button>
  
      <br/>
      <ul>
        <li>Overview</li>
        <li>Process Files</li>
        <li>Find Tables</li>
        <li>Review Tables</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
