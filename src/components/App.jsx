import React from 'react';
import Header from './Header';
import KegMenu from './KegMenu';
import AddKeg from './AddKeg';
import { Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={KegMenu} />
        <Route path='/addkeg' component={AddKeg} />
      </Switch>

    </div>
  );
}

export default App;