import React from 'react';
import arrow from '../icons/arrow.png'

const subheader = () => (
  <div className="subheader">
    <h2>YOUR INVESTORS</h2>
    <div className="subheader-info">
      <p>Live-edit your shareholders and/or share issues</p>
      <img src={arrow} alt=" v "/>
    </div>
  </div>
)

export default subheader;