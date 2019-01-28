import React from 'react';

class IssueNewShares extends React.Component {
  idRef = React.createRef();
  dateRef = React.createRef();
  amountRef = React.createRef();
  pricePerShareRef = React.createRef();

  createIssue = event => {
    event.preventDefault();
    const sharesIssue = {
      shareholderId: this.idRef.current.value,
      date: new Date(this.dateRef.current.value),
      amount: parseInt(this.amountRef.current.value),
      pricePerShare: parseInt(this.pricePerShareRef.current.value), 
    };
    console.log(sharesIssue);
    this.props.issueNewShares(sharesIssue);
  };

  populateOptions(options) {
    return Object.values(options).map((option) => (
      <option value={option._id} key={option._id}>{option.name}</option>
    ));
  }
 
  render() {
    return (
     <form onSubmit={this.createIssue}>
       <select name="shareholderId" ref={this.idRef} type="text" required>
        {this.populateOptions(this.props.details)}
       </select>
       <input name="date" ref={this.dateRef} type="date" required />
       <input name="amount" type="number" ref={this.amountRef} placeholder="Amount of shares" required />
       <input name="pricePerShare" type="number" ref={this.pricePerShareRef} placeholder="Price per share($)" required />
       <button type="submit">Issue Now</button>
     </form>
    )
  }
};

export default IssueNewShares;