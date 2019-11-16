import React from 'react';
import { Link } from 'react-router-dom';
import wallpaper from '../assets/images/wallpaper.jpg';

const fullHeaderStyling = {
  paddingBottom: '40px',
  position: 'relative',
  display: 'inline block',
  width: '100%',
  marginBottom: '40px',
};
const headerStyling = {
  position: 'absolute',
  margin: '0 auto',
  left: '0',
  right: '0',
  top: '2%',
  textAlign: 'center',
  fontSize: '40px',
  color: '#ebeae8',
  fontFamily: 'impact'
 
};
const headerWallpaperStyling = {
  width: '100%',
  zIndex: '-1'
};

const link1Styling = {
  color: '#5e463d',
  float: 'left',
  fontSize: '25px',
  fontWeight: 'bold',
  marginLeft: '40px',
  marginTop: '5px',
  padding: '5px',
  border: '5px ridge #967062',
  textDecoration: 'none'
  
  
};
const link2Styling = {
  color: '#5e463d',
  float: 'right',
  fontSize: '25px',
  fontWeight: 'bold',
  marginRight: '40px',
  marginTop: '5px',
  padding: '5px',
  border: '5px ridge #967062',
  textDecoration: 'none'
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