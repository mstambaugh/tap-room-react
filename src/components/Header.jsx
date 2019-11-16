import React from 'react';
import { Link } from 'react-router-dom';
import wallpaper from '../assets/images/wallpaper.jpg';

const fullHeaderStyling = {
  
 
};
const headerStyling = {
  textAlign: 'center',
};
const headerWallpaperStyling = {
  width: '120%',
  height: '10%',
};

const link1Styling = {
  color: 'gold',
  float: 'left'
};
const link2Styling = {
  color: 'gold',
  float: 'right',
};

function Header() {
  return (
    <div style={fullHeaderStyling}>
      <h1 style={headerStyling}>Welcome to Unnamed Fantasy Bar</h1>
      <div>
        <img src={wallpaper} style={headerWallpaperStyling}></img>
      </div>

      <div>
        <Link to='/TapList' style={link1Styling}>Beers on Tap</Link>  
        <Link to='/EmployeeHome' style={link2Styling}>Employee Menu</Link>
      </div>
    </div>
  );
}

export default Header;