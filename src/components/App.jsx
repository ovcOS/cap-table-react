import React from 'react';
import Shareholder from './Shareholder';
import AddShareholdersForm from './AddShareholdersForm'
import IssueNewSharesForm from './IssueNewSharesForm';
import SharesIssue from './SharesIssue';
import CapTable from './CapTable';

class App extends React.Component {
  state = {
    shareholders: {},
    sharesIssues: {},
  };

  componentDidMount() {
    const shareholdersLocal = localStorage.getItem('shareholders');
    if (shareholdersLocal) {
      this.setState( {shareholders: JSON.parse(localStorage.getItem('shareholders')) });
      this.setState( {sharesIssues: JSON.parse(localStorage.getItem('sharesIssues')) });
    }
  };

  componentDidUpdate(){
    localStorage.setItem('shareholders', JSON.stringify(this.state.shareholders));
    localStorage.setItem('sharesIssues', JSON.stringify(this.state.sharesIssues));
  };

  addShareholder = shareholder => {
    const shareholders = {...this.state.shareholders};
    shareholders[`shareholder${Date.now()}`] = shareholder;
    this.setState({ shareholders });
  };

  issueNewShares = issue => {
    const sharesIssues = {...this.state.sharesIssues};
    sharesIssues[`issue${Date.now()}`] = issue;
    this.setState({ sharesIssues });
  };

  startFromScratch = () => {
    const shareholders = "";
    const sharesIssues = "";
    this.setState({ shareholders });
    this.setState({ sharesIssues });
  }

  render() {
    return (
      <React.Fragment>
      <div className="menu">
        <div>
          <AddShareholdersForm addShareholder={this.addShareholder}/>
          <IssueNewSharesForm issueNewShares={this.issueNewShares} details={this.state.shareholders} />
        </div>
  
        <CapTable holderDetails={this.state.shareholders} issueDetails={this.state.sharesIssues} />
      </div>
      {Object.keys(this.state.shareholders).map(shareholder => {
        return (
        <Shareholder
          key={shareholder}
          details={this.state.shareholders[shareholder]}/>
        )}
      )}
      <button className="button-reset" onClick={this.startFromScratch}>RESET!</button>
      </React.Fragment>
    );
  }
};
    /* {Object.keys(this.state.sharesIssues).map(issue => {
        return <SharesIssue key={issue} details={this.state.sharesIssues[issue]} /> }
      )} */
export default App;
