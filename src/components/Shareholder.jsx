import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Shareholder extends React.Component {
  handleChange = (event) => {
    const updatedHolder = {
      ...this.props.holderDetails,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateShareholder(this.props.index, updatedHolder);
  }

  deleteShareholder = () => {
    const entries = Object.entries(this.props.issueDetails)
    const matchingEntries = entries.filter(issue => {
      if (this.props.holderDetails._id === issue[1].shareholderId) { 
        return issue
      } 
    });
    const keys = matchingEntries.map(issue => issue[0]);
    this.props.deleteShareholder(this.props.index, keys);
  }

  render() {
    const { name, email, address, _id } = this.props.holderDetails;
    return (
      <TransitionGroup className="shareholder">
        <CSSTransition timeout={{enter:5000, exit:5000}} classNames="shareholder">
          <div>
            <input type="text" name="name" onChange={this.handleChange} value={name}/>
            <input type="text" name="email" onChange={this.handleChange} value={email}/>
            <input type="text" name="line1" onChange={this.handleChange} value={address.line1}/>
            <input type="text" name="line2" onChange={this.handleChange} value={address.line2}/>
            <input type="text" name="postcode" onChange={this.handleChange} value={address.postcode}/>
            <input type="text" name="city" onChange={this.handleChange} value={address.city}/>
            <input type="text" name="country" onChange={this.handleChange} value={address.country}/>
            <p>{_id}</p>
            <button onClick={this.deleteShareholder}>DELETE SHAREHOLDER</button>
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
};

export default Shareholder;