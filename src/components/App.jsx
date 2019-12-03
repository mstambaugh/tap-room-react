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
    this.handlePintSale = this.handlePintSale.bind(this);
  }
 

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
          <Route path='/taplist' render={() => <TapList tapList={this.state.masterTapList} />} />
          <Route path='/newkeg' render={() => <AddKegControl onNewKegCreation={this.handleAddingNewKegToTapList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;