import React from 'react';
import { Link } from 'react-router-dom';
import wallpaper from '../assets/images/wallpaper.jpg';
import { Container, Row, Col } from 'reactstrap';

const fullHeaderStyling = {
  borderBottom: '4px solid #254a34',
  paddingBottom: '10px',
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
  top: '8%',
  textAlign: 'center',
  fontSize: '50px',
  color: '#ebeae8',
  fontFamily: 'impact',
};
const headerWallpaperStyling = {
  width: '100%',
  zIndex: '-1',
  paddingBottom: '6px'
};

const link1Styling = {
  color: '#5e463d',
  textAlign: 'right',
  width: '33%%',
  fontSize: '25px',
  fontWeight: 'bold',
  position: 'relative',
  marginLeft: '30px',
  marginRight: '30px,',
  padding: '2px',
  border: '5px ridge #967062',
  textDecoration: 'none'
  
  
};
const link2Styling = {
  color: '#5e463d',
  textAlign: 'right',
  width: '33%',
  top: '10%',
  fontSize: '25px',
  fontWeight: 'bold',
  position: 'relative',
  marginLeft: '20px',
  marginRight: '20px,',
  padding: '2px',
  border: '5px ridge #967062',
  textDecoration: 'none'
};
const link3Styling = {
  color: '#5e463d',
  fontSize: '25px',
  textAlign: 'left',
  width: '33%',
  top: '10%',
  fontWeight: 'bold',
  position: 'relative',
  padding: '2px',
  marginLeft: '30px',
  marginRight: '30px,',
  border: '5px ridge #967062',
  textDecoration: 'none'
};

function Header() {
  return (
    <Container>
      <Row>
        <div style={fullHeaderStyling}>
          <img src={wallpaper} style={headerWallpaperStyling}></img>
          <div style={headerStyling}>
            <h1>MIDBEST BEER</h1>
          </div>
        </div>
        <Col sm='4'>
          <Link to='/TapList' style={link1Styling}>Beers on Tap</Link>  
        </Col>
        <Col sm='4'>
          <Link to='/EmployeeHome' style={link2Styling}>Employee Menu</Link>
        </Col>  
        <Col sm='4'>
          <Link to='/' style={link3Styling}>Home</Link>
        </Col>  
      </Row>
    </Container >
    
  );
}

export default Header;