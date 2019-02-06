import React from 'react';
import AddShareholdersForm from './AddShareholdersForm'
import IssueNewSharesForm from './IssueNewSharesForm';
import CapTable from './CapTable';
import Header from './Header';
import samples from '../samples'
import Shareholder from './Shareholder'
import Subheader from './Subheader'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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

  updateShareholder = (key, updatedHolder) => {
    const shareholders = {...this.state.shareholders};
    shareholders[key] = updatedHolder;
    this.setState({ shareholders })
  };

  deleteShareholder = (holder, issues) => {
    const shareholders = {...this.state.shareholders};
    const sharesIssues = {...this.state.sharesIssues};
    issues.map(issue => delete sharesIssues[issue]);
    this.setState( {sharesIssues} )
    delete shareholders[holder];
    this.setState({ shareholders })
  };

  issueNewShares = issue => {
    const sharesIssues = {...this.state.sharesIssues};
    sharesIssues[`issue${Date.now()}`] = issue;
    this.setState({ sharesIssues });
  };

  updateIssue = (key, updatedIssue) => {
    const sharesIssues = {...this.state.sharesIssues};
    sharesIssues[key] = updatedIssue;
    this.setState({ sharesIssues });
  };

  deleteIssue = (key) => {
    const sharesIssues = {...this.state.sharesIssues}
    delete sharesIssues[key]
    this.setState({ sharesIssues })
  }

  loadSamples = () => {
    const shareholders = {...this.state.shareholders, ...samples.sampleInvestors};
    this.setState({ shareholders })
    setTimeout(500);
    const sharesIssues = {...this.state.sharesIssues, ...samples.sampleIssues};
    this.setState({ sharesIssues })
  }

  startFromScratch = () => {
    const shareholders = "";
    const sharesIssues = "";
    this.setState({ shareholders });
    this.setState({ sharesIssues });
  }

  render() {
    return (
      <div className="background">
      <Header loadSamples={this.loadSamples} />
        <div className="menu">
          <div className="forms">
            <AddShareholdersForm addShareholder={this.addShareholder}/>
            <IssueNewSharesForm issueNewShares={this.issueNewShares} details={this.state.shareholders} />
          </div>
          <div className="cap-table">
            <CapTable holderDetails={this.state.shareholders} issueDetails={this.state.sharesIssues} />
          </div>
        </div>
        <Subheader/>
        <TransitionGroup className="shareholders">
          {Object.keys(this.state.shareholders).map(shareholder => {
            return <CSSTransition
                    timeout={{enter:1000, exit:1000}}
                    key={shareholder}
                    classNames="shareholder">
                      <Shareholder
                        index={shareholder}
                        holderDetails={this.state.shareholders[shareholder]}
                        issueDetails={this.state.sharesIssues}
                        updateShareholder={this.updateShareholder}
                        deleteShareholder={this.deleteShareholder}
                        updateIssue={this.updateIssue}
                        deleteIssue={this.deleteIssue}/>
                  </CSSTransition>
          })}
        </TransitionGroup>
        <button className="button-reset hover-shadow" onClick={this.startFromScratch}></button>
      </div>
    );
  }
};

export default App;