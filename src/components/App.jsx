import React from 'react';
import AddShareholdersForm from './AddShareholdersForm'
import IssueNewSharesForm from './IssueNewSharesForm';
import CapTable from './CapTable';
import Header from './Header';

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
      <div className="background">
      <Header />
        <div className="menu">
          <div className="forms">
            <AddShareholdersForm addShareholder={this.addShareholder}/>
            <IssueNewSharesForm issueNewShares={this.issueNewShares} details={this.state.shareholders} />
          </div>
          <div className="cap-table-div">
            <CapTable holderDetails={this.state.shareholders} issueDetails={this.state.sharesIssues} />
          </div>
        </div>
        {}
        <button className="button button-reset hover-shadow" onClick={this.startFromScratch}>RESET!</button>
      </div>
    );
  }
};

export default App;

/*  {Object.keys(this.state.shareholders).map(shareholder => {
        return (
        <Shareholder
          key={shareholder}
        details={this.state.shareholders[shareholder]}/>
      )}
    )}
    {Object.keys(this.state.sharesIssues).map(issue => {
      return <SharesIssue key={issue} details={this.state.sharesIssues[issue]} /> }
    )}
*/
