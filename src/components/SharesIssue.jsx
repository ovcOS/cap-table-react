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
      <div className="shares-issue">
        <p className="alter-font issue-title">share {this.props.index}</p>
        <div className="issue-details">
          <span className="alter-font">shares:</span>
          <input name="amount"
                 type="number"
                 onChange={this.handleChange} 
                 value={this.props.issueDetails.amount}
                 placeholder="Amount of shares"/>
          <span className="alter-font">price/share ($):</span>    
          <input name="pricePerShare"
                 type="number"
                 onChange={this.handleChange}
                 value={this.props.issueDetails.pricePerShare}
                 placeholder="Price per share ($)"/>
          <span className="alter-font">issue date (read-only):</span>
          <input name="date" type="text" value={this.props.issueDetails.date} readOnly />
        </div>
        <button className="button-delete-issue" onClick={this.deleteIssue}></button>
      </div>
    )
  }
};

export default SharesIssue;