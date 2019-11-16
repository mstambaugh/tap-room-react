import React from 'react';
import { Link } from 'react-router-dom';
import wallpaper from '../assets/images/wallpaper.jpg';

const fullHeaderStyling = {
  paddingBottom: '20px',
  position: 'relative',
  display: 'inline block',
  width: '100%',
  marginBottom: '10px'
};
const headerStyling = {
  position: 'absolute',
  zIndex: '999',
  margin: '0 auto',
  left: '0',
  right: '0',
  top: '2%',
  textAlign: 'center',
  fontSize: '40px',
  color: 'white',
  fontFamily: 'impact'
 
};
const headerWallpaperStyling = {
  width: '100%',
};

const link1Styling = {
  color: 'gold',
  float: 'left',
  fontSize: '25px',
  fontWeight: 'bold'
  
};
const link2Styling = {
  color: 'gold',
  float: 'right',
  fontSize: '25px',
  fontWeight: 'bold'
};

function Header() {
  return (
    <div style={fullHeaderStyling}>
      <img src={wallpaper} style={headerWallpaperStyling}></img>
      <div style={headerStyling}>
        <h1>Bar Ferda</h1>
      </div>
      <div>
        <Link to='/TapList' style={link1Styling}>Beers on Tap</Link>  
        <Link to='/EmployeeHome' style={link2Styling}>Employee Menu</Link>
      </div>
    </div>
  );
}

export default Header;