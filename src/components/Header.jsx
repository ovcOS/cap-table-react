import React from 'react';
import piggyBank from '../icons/piggyBank.png'

const Header = () => (
  <header className="app-header">
    <div className="header-box">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="header-content">
        <h1>THE CAP TABLE APP</h1>
      </div>
    </div>
      <img src={piggyBank} className="piggy-bank" alt="/"/>
  </header>
)

export default Header;