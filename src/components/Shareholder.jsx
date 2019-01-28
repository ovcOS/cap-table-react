import React from 'react';

class Shareholder extends React.Component {
  
  render() {
    const { name, email, address } = this.props.details;
    return (
      <div className="shareholder">
        <h3>{name}</h3>
        <h4>{email}</h4>
        <p>{`${address.line1}, ${address.postcode} ${address.city} (${address.country})`}</p>
      </div>
    )
  }
};

export default Shareholder;