import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class CapTable extends React.Component {

  renderCapTable = (investor) => {
    return (
      <CSSTransition
        classNames="cap-table"
        timeout={{enter:5000, exit:5000}}
        key={investor.id}>
        <tr>
          <td>{investor.name}</td>
          <td>{investor.amountOfShares}</td>
          <td>{investor.percentage}%</td>
          <td>${investor.investedAmount}</td>
          <td>{investor.address}</td>
        </tr>
      </CSSTransition>
    )      
  }

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
    
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>Investor</th>
              <th>Amount of Shares</th>
              <th>Percent Owned</th>
              <th>Capital invested</th>
              <th>Address</th>
            </tr>
          </thead>
          <TransitionGroup component="tbody" className="cap-table">
            {capTable.map(this.renderCapTable)}
          </TransitionGroup>
        </table>
      </React.Fragment>
    )
  }
};

export default CapTable;