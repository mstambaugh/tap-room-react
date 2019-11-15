import React from 'react';
import { Link } from 'react-router-dom';

const headerStyling = {
  backgroundColor: '#801b1b',
  color: 'white',
  textAlign: 'center'
};

const link1Styling = {
  color: 'gold'
}
const link2Styling = {
  color: 'orange'
}
function Header() {
  return (
    <div style={headerStyling}>
      <h1>Rad Midwestern Beers</h1>
      <div>
        <Link to='/' style={link1Styling}>Beers on Tap</Link> | <Link to='/AddKeg' style={link2Styling}>Employee Add Keg</Link>
      </div>
    </div>
  );
}

export default Header;