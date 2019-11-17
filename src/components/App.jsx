import React from 'react';
import Header from './Header';
import Home from './Home';
import TapList from './TapList';
import EmployeeHome from './EmployeeHome';
import { Switch, Route } from 'react-router-dom';

const pageBackground = {
  backgroundColor: '#53695b',
};

function App() {
  return (
    <div style={pageBackground}>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/employeehome' component={EmployeeHome} />
        <Route path= '/taplist' component={TapList} />
      </Switch>

    </div>
  );
}

export default App;