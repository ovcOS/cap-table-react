import React from 'react';

class SharesIssue extends React.Component {
  render() {
    const { date, amount, pricePerShare } = this.props.details;
    return (
      <div>
        <h3>Share Issue</h3>
        <p>{date.toString()}</p>
        <p>{amount} shares</p>
        <p>${pricePerShare}/share</p>
      </div>
    )
  }
};

export default SharesIssue;