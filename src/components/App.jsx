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
    const localStorageRef = localStorage.getItem('shareholders');
    if (localStorageRef) {
      this.setState( {shareholders: JSON.parse(localStorageRef)} )
    }
  };

  componentDidUpdate(){
    localStorage.setItem('shareholders', JSON.stringify(this.state.shareholders));
  };

  addShareholder = shareholder => {
    const newShareholder = {...this.state.shareholders};
    newShareholder[`shareholder${Date.now()}`] = shareholder;
    this.setState({ shareholders: newShareholder });
  };

  issueNewShares = issue => {
    const newShares = {...this.state.sharesIssues};
    newShares[`issue${Date.now()}`] = issue;
    this.setState({ sharesIssues: newShares });
  };

  render() {
    return (
      <React.Fragment>
      <div className="menu">
        <span>
          <AddShareholdersForm addShareholder={this.addShareholder}/>
        </span>
        <span>
          {Object.keys(this.state.shareholders).map(shareholder => {
            return <Shareholder key={shareholder} details={this.state.shareholders[shareholder]} /> }
          )}
        </span>
        <span>
          <IssueNewSharesForm issueNewShares={this.issueNewShares} details={this.state.shareholders} />
        </span>
        <span>
          {Object.keys(this.state.sharesIssues).map(issue => {
            return <SharesIssue key={issue} details={this.state.sharesIssues[issue]} /> }
          )}
        </span>
      </div>
      <div>
      <CapTable holderDetails={this.state.shareholders} issueDetails={this.state.sharesIssues} />
      </div>
      </React.Fragment>
    );
  }
};

export default App;
