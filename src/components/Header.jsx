import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Rad Midwestern Beers</h1>
      <div>
        <Link to='/'>Beers on Tap</Link> | <Link to='/AddKeg'>Employee Add Keg</Link>
      </div>
    </div>
  );
}

export default Header;