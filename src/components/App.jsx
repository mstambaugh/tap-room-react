import React from 'react';
import Header from './Header';
import KegMenu from './KegMenu';
import AddKeg from './AddKeg';
import { Switch, Route } from 'react-router-dom';


const backgroundStyling = {
  backgroundColor: '#801b1b'
};
function App() {
  return (
    <div style={backgroundStyling}>
      <Header />
      <Image />
      <Switch>
        <Route exact path='/' component={KegMenu} />
        <Route path='/addkeg' component={AddKeg} />
      </Switch>

    </div>
  );
}

export default App;