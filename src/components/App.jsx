import React from 'react';
import Header from './Header';
import Home from './Home';
import TapList from './TapList';
import { Switch, Route } from 'react-router-dom';
import AddKegControl from './AddKegControl';


// 80/20 spice up code vs styling. Getting full crud functionality looks good. Update component tree. 
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
    this.handlePintSale = this.handlePintSale.bind(this);
  }
  // put this in as an array literal inside the master tap list array 
  var masterTapList = [
  {
    name: 'Two Hearted Ale',
    brand: 'Bell\'s Brewery',
    location: 'Kalamazoo, Michigan',
    variety: 'American IPA',
    price: '4.50',
    abv: '7.0%',
    pintsleft: '46'
  },
  {
    name: 'Porter',
    brand: 'Founders Brewing Co.',
    location: 'Grand Rapids, Michigan',
    variety: 'Robust Porter',
    price: '5.00',
    abv: '6.5%',
    pintsleft: '121'
  }
];
 

  handleAddingNewKegToTapList(newKeg){
    var newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.push(newKeg);
    this.setState({ masterTapList: newMasterTapList });
  }
  handlePintSale(index) {
    var newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList[index].pintsLeft --;
    newMasterTapList.push();
    this.setState({ masterTapList: newMasterTapList });
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
          <Route path='/taplist' render={() => <TapList tapList={this.state.masterTapList} onPintSale={this.state.masterTapList/>} />
          <Route path='/newkeg' render={() => <AddKegControl onNewKegCreation={this.handleAddingNewKegToTapList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;