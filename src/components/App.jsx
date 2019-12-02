import React from 'react';
import Header from './Header';
import Home from './Home';
import TapList from './TapList';
import { Switch, Route } from 'react-router-dom';
import AddKegControl from './AddKegControl';

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
    this.onPintSale = this.onPintSale.bind(this);
  }
  // need method for updating pints left in keg, along with mount and unmount stuff set to timers for autoupdating.

  handleAddingNewKegToTapList(newKeg){
    var newMasterTapList = this.state.masterTapList.slice();
    // addKeg.formattedPintsLeft = (addKeg.pintsLeft).fromNow(true);
    newMasterTapList.push(newKeg);
    this.setState({ masterTapList: newMasterTapList });
  }
  onPintSale(Keg){
    var newPintsLeft = this.state.pintsLeft;
    newPintsLeft -=1
    newPintsLeft.push(Keg);
    this.setState({ pintsLeft: newPintsLeft});
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <div style={pageBackground}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/employeeverification' render={() => <EmployeeVerification onNewKegCreation={this.handleAddingNewKegToTapList} />} /> */}
          <Route path='/taplist' render={() => <TapList tapList={this.state.masterTapList} />} />
          <Route path='/newkeg' render={() => <AddKegControl onNewKegCreation={this.handleAddingNewKegToTapList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;