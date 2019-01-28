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



  render() {
    return (
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
          <IssueNewSharesForm details={this.state.shareholders} />
        </span>
      </div>
    );
  }
}

export default App;
