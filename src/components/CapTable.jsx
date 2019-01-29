import React from 'react';

class CapTable extends React.Component {
  
  render() {
    const shareholders = Object.values(this.props.holderDetails);
    const issues = Object.values(this.props.issueDetails);
    const totalShares = issues.reduce((a,b) => a + b.amount, 0);

    const capTable = shareholders.map((shareholder) => {
      let individualShares, investedAmount;
      issues.reduce((tally, current) => {
        if (shareholder._id === current.shareholderId) {
          individualShares = tally + current.amount;
        } else {
          individualShares = tally;
        }
        return individualShares;
      }, 0)

      issues.reduce((tally, current) => {
        if (shareholder._id === current.shareholderId) {
          investedAmount = tally + (current.amount * current.pricePerShare);
        } else {
          investedAmount = tally;
        }
        return investedAmount;
      }, 0)

      return {
        id: shareholder._id,
        name: shareholder.name,
        address: shareholder.address.line1,
        amountOfShares: individualShares || 0,
        percentage: (individualShares / totalShares * 100) || 0,
        investedAmount: investedAmount || 0,
      }
    });
    console.log(capTable)

    return (
      <div className="cap-table">
        <h3>Cap table</h3>
        {capTable.map(investor => <p key={investor.id}>{`${investor.name} lives on ${investor.address},
        owns ${investor.amountOfShares} shares, which respresents a ${investor.percentage}% of the company,
        and invested a total of $${investor.investedAmount}`}</p>)}       

      </div>
    )
  }
};

export default CapTable;