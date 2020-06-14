import React, {Component} from 'react';
import Radio from './components/Radio';
import Table from './components/Table';

class App extends Component {
  constructor() {
      super()
    this.state = {
      parameterState: ""
    }
    this.sortByParameter = this.sortByParameter.bind(this);
  }

  sortByParameter(parameter) {
    // set state of 'parameterState' here
    this.setState({ parameterState: parameter })
  }

  render() {
    const {parameterState} = this.state;
    return (
      <div className='container-fluid'>
        <center>
          <h1>Birthday Records</h1>
        </center>
        <Radio sortBy={this.sortByParameter}/>
        <Table sortParameter={parameterState}/>
      </div>
);


  }
}

export default App;
