import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="nav firstcontainer" >
        <div className="left">
          <h1>SecureFast <span>Funding</span></h1>
        </div>
        <div className="right">
          <ul>
          <li> <span className='liHome'>Home</span></li>
          <li>Loan Services</li>
          <li>Check Eligibility</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Contact US</li>
          </ul>
        </div>
      </nav>
      
    </div>
  );
}

export default Header;
