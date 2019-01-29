import React from 'react';

class CapTable extends React.Component {
 
  render() {
    const shareholders = Object.values(this.props.holderDetails);
    const issues = Object.values(this.props.issueDetails);
    const capTable = shareholders.map((shareholder) => {
      let individualShares;
      let totalShares
      issues.reduce((tally, current) => {
        if (shareholder._id === current.shareholderId) {
          individualShares = tally + current.amount;
        } else {
          individualShares = tally;
        }
        return individualShares;
      }, 0)
      const test = {
        name: shareholder.name,
        address: shareholder.address.line1,
        amountOfShares: individualShares || 0,
      }
      return test;
    });
    console.log(capTable)


    return (
      <div className="cap-table">
        <h3>Cap table</h3>
      </div>
    )
  }
};

export default CapTable;