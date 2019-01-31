import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { commafy } from '../helpers'

class CapTable extends React.Component {

  renderCapTable = (investor) => {
    return (
      <CSSTransition
        classNames="cap-table"
        timeout={{enter:1000, exit:1000}}
        key={investor.id}>
        <tr className="table-columns">
          <td>{investor.name}</td>
          <TransitionGroup component="td" className="count">
            <CSSTransition
              classNames="count"
              key={investor.amountOfShares}
              timeout={{enter:3000, exit:3000}}
            >
              <span>{commafy(investor.amountOfShares)}</span>
            </CSSTransition>
          </TransitionGroup>
          <TransitionGroup component="td" className="count">
            <CSSTransition
              classNames="count"
              key={investor.amountOfShares}
              timeout={{enter:3000, exit:3000}}
            >
              <span>{investor.percentage.toFixed(2)}%</span>
            </CSSTransition>
          </TransitionGroup>
          <TransitionGroup component="td" className="count">
            <CSSTransition
              classNames="count"
              key={investor.amountOfShares}
              timeout={{enter:3000, exit:3000}}
            >
              <span>${commafy(investor.investedAmount)}</span>
            </CSSTransition>
          </TransitionGroup>
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
        address: `${shareholder.address.line1}, ${shareholder.address.postcode}
                - ${shareholder.address.city} (${shareholder.address.country})`,
        amountOfShares: individualShares || 0,
        percentage: (individualShares / totalShares * 100) || 0,
        investedAmount: investedAmount || 0,
      }
    });
    
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr className="table-columns">
              <th>Investor</th>
              <th>Shares</th>
              <th>Owns</th>
              <th>Invested</th>
              <th>Address</th>
            </tr>
          </thead>
          <TransitionGroup component="tbody">
            {capTable.map(this.renderCapTable)}
          </TransitionGroup>
        </table>
      </React.Fragment>
    )
  }
};

export default CapTable;