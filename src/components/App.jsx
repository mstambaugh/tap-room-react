import React from 'react';
import Header from './Header';
import Home from './Home';
import TapList from './TapList';
import EmployeeHome from './EmployeeHome';
import { Switch, Route } from 'react-router-dom';
import AddKeg from './AddKeg';

const pageBackground = {
  backgroundColor: '#fce7d9',
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTapList: []
    };
    this.handleAddingNewKegToTapList = this.handleAddingNewKegToTapList.bind(this);
  }
  // need method for updating pints left in keg, along with mount and unmount stuff set to timers for autoupdating.

  handleAddingNewKegToTapList(newKeg){
    var newMasterTapList = this.state.masterTapList.slice();
    // addKeg.formattedPintsLeft = (addKeg.pintsLeft).fromNow(true);
    newMasterTapList.push(newKeg);
    this.setState({ masterTapList: newMasterTapList });
  }

  render() {
    return (
      <div style={pageBackground}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/employeehome' component={EmployeeHome} />
          <Route path='/taplist' render={() => <TapList tapList={this.state.masterTaplist} />} />
          <Route path='/addKeg' render={() => <AddKeg onAddKeg={this.handleAddingNewKegToTapList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;