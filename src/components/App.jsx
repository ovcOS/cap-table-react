import React from 'react';
import Shareholder from './Shareholder';
import SharesIssue from './SharesIssue';

class App extends React.Component {
  render() {
    return (
      <div>
        <Shareholder/>
        <br/>
        <SharesIssue />
      </div>
    );
  }
}

export default App;
