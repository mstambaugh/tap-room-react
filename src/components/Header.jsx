import React from 'react';
import { Link } from 'react-router-dom';
import wallpaper from '../assets/images/wallpaper.jpg';
// import styled from 'styled-components';

const fullHeaderStyling = {
  borderBottom: '30px double #879484',
  position: 'relative',
  display: 'inline block',
  width: '100%',
  marginBottom: '100px',
  paddingBottom: '15px'
};
const headerStyling = {
  position: 'absolute',
  margin: '0 auto',
  left: '0',
  right: '0',
  top: '2%',
  textAlign: 'center',
  fontSize: '50px',
  color: '#fce7d9',
  fontFamily: 'Arial',
};
const headerWallpaperStyling = {
  width: '100%',
  zIndex: '-1',
  paddingBottom: '10px',
};

const link1Styling = {
  color: '#c9ba32',
  fontSize: '25px',
  fontWeight: 'bold',
  position: 'relative',
  marginLeft: '70px',
  marginRight: '70px',
  padding: '3px',
  border: '4px inset #c9be83',
  textDecoration: 'none',
  fontFamily: 'Arial',
  
};
const link2Styling = {
  color: '#81909c',
  top: '10%',
  fontSize: '25px',
  fontWeight: 'bold',
  position: 'relative',
  marginRight: '70px',
  padding: '3px',
  border: '5px inset #81909c',
  textDecoration: 'none',
  fontFamily: 'Arial'
};
const link3Styling = {
  color: '#dead9b',
  fontSize: '25px',
  top: '10%',
  fontWeight: 'bold',
  position: 'relative',
  padding: '3px',
  marginRight: '50px',
  border: '5px inset #cc8f78',
  textDecoration: 'none',
  fontFamily: 'Arial'
};

function Header() {
  return (
    <div style={fullHeaderStyling}>
      <img src={wallpaper} style={headerWallpaperStyling}></img>
      <div style={headerStyling}>
        <h1>MIDBEST BEER</h1>
      </div>
      <div>
        <Link to='/' style={link1Styling}>Home</Link>
        <Link to='/TapList' style={link2Styling}>Beers on Tap</Link>  
        <Link to='/EmployeeHome' style={link3Styling}>Employee Home</Link>
        <Link to='/AddKeg' style={link3Styling}>AddKeg</Link>
      </div>
    </div>
  );
}

export default Header;