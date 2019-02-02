import React from 'react';

class SharesIssue extends React.Component {

  handleChange = (event) => {
    const updatedIssue = { ...this.props.issueDetails,
      [event.currentTarget.name]: parseInt(event.currentTarget.value)
    };
    this.props.updateIssue(this.props.index, updatedIssue);
  }

  deleteIssue = () => {
    this.props.deleteIssue(this.props.index)
  }

  render() {
    
    return(
      <div>
        <p>hello</p>
        <input name="amount" type="number" onChange={this.handleChange} value={this.props.issueDetails.amount} placeholder="Amount of shares"/>
        <input name="pricePerShare" type="number" onChange={this.handleChange} value={this.props.issueDetails.pricePerShare} placeholder="Price per share ($)"/>
        <input name="date" type="text" value={this.props.issueDetails.date} readOnly />
        <button onClick={this.deleteIssue}>DELETE</button>
      </div>

    )
  }
};

export default SharesIssue;