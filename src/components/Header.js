import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className='left-header'>
        <img src="logo1.png" alt="Logo" className="header-image" />
        <div class="vertical-line"></div>

        <h2>STORIES</h2>
      </div>
      <button>Courses</button>
    </header>
  );
};

export default Header;