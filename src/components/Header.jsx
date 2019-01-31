import React from 'react';
import piggyBank from '../icons/piggyBank.png'

class Header extends React.Component {
  render() {
    return (
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
        <div className="header-right">
          <button onClick={this.props.loadSamples} className="button button-populate hover-shadow" >LOAD SAMPLE INVESTORS</button>
          <img src={piggyBank} className="piggy-bank" alt="/"/>
        </div>
      </header>
    )
  }
}

export default Header;