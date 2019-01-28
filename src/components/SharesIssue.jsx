import React from 'react';

class SharesIssue extends React.Component {
  displayShares(object) {
    Object.values(object).map((value) => (
      <li>{value.amount}</li>
    ));
  }
  render() {
    return (
      <ul>
      {this.displayShares(this.props.sharesIssues)}
      </ul>
    )
  }
};

export default SharesIssue;