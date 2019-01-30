import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Shareholder extends React.Component {
  
  render() {
    const { name, email, address } = this.props.details;
    return (
      <TransitionGroup className="shareholder">
        <CSSTransition timeout={{enter:5000, exit:5000}} classNames="shareholder">
          <div>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <p>{`${address.line1}, ${address.postcode} ${address.city} (${address.country})`}</p>
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
};

export default Shareholder;