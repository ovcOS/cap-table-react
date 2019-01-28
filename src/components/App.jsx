import React from 'react';
import Shareholder from './Shareholder';
import AddShareholdersForm from './AddShareholdersForm'
import IssueNewSharesForm from './IssueNewSharesForm';

class App extends React.Component {
  state = {
    shareholders: {},
    sharesIssues: {},
    capTable: {}
  }

  addShareholder = shareholder => {
    const newShareholder = {...this.state.shareholders};
    newShareholder[`shareholder${Date.now()}`] = shareholder;
    this.setState({ shareholders: newShareholder });
  }

  issueNewShares = issue => {
    const newShares = {...this.state.sharesIssues};
    newShares[`issue${Date.now()}`] = issue;
    this.setState({ sharesIssues: newShares });
  }

  render() {
    return (
      <div className="menu">
        <span>
          <AddShareholdersForm addShareholder={this.addShareholder}/>
        </span>
        <span>
          {Object.keys(this.state.shareholders).map(shareholder => {
            return <Shareholder key={shareholder} details={this.state.shareholders[shareholder]} sharesIssues={this.state.sharesIssues} /> }
          )}
        </span>
        <span>
          <IssueNewSharesForm issueNewShares={this.issueNewShares} details={this.state.shareholders} />
        </span>
      </div>
    );
  }
}

export default App;
