import React from 'react';
import '../styles/Index.css';
import { FaBell, FaSearch, FaTools } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';

const Header = () => {
  return (
    <>
      <section className="header-section">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <FaSearch />
        </div>

        <div className="icon-span">
          <FaPerson />
          <span>Yunus</span>
          <FaBell />
          <FaTools />
        </div>
      </section>
    </>
  );
};

export default Header;
