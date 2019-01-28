import React from 'react';
import Shareholder from './Shareholder';
import AddShareholdersForm from './AddShareholdersForm'
import SharesIssue from './SharesIssue';

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
      <div>
        <AddShareholdersForm addShareholder={this.addShareholder}/>
        <br/>
        {Object.keys(this.state.shareholders).map(shareholder => {
          return <Shareholder key={shareholder} details={this.state.shareholders[shareholder]} /> }
        )}
        <br/>
        <SharesIssue />
      </div>
    );
  }
}

export default App;
