import React from 'react';
import Keg from './Keg';
import {masterKegList} from './TapList';
import { Link } from 'react-router-dom';

const QuoteStyles = {
  color: '#093b14',
  border: '10px inset #8da686',
  padding: '30px',
  margin: '50px',
  fontStyle: 'italic',
  fontSize: '30px'
};

const TomWaitsStyles = {
  color: '#8da686',
  textAlign: 'right',
  paddingRight: '50px',
  fontSize: '30px'
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
const TitleStyles = {
  marginBottom: '20px',
  color: '#8da686',
  borderBottom: '5px inset #81909c',
  fontSize: '40px'
};
const TapListStyles = {
  margin: '30px',
  paddingLeft: '75px',
  paddingRight: '75px',
  color: '#8da686'
};

function EmployeeHome() {
  return (
    <div>
      <div>
        <h3 style={QuoteStyles}>A gentleman is someone who can play the accordion, but doesn't.</h3>
        <h4 style={TomWaitsStyles}>~~~Tom Waits</h4>
      </div>
      <div style={TapListStyles}>
        <h2 style={TitleStyles}>Kegs currently on Tap</h2>
        {masterKegList.map((keg, index) =>
          <Keg name={keg.name}
            brand={keg.brand}
            location={keg.location}
            variety={keg.variety}
            price={keg.price}
            abv={keg.abv}
            key={index} />
        )}
        <h2 style={TitleStyles}>Almost tapped Out!</h2>   
        <ul></ul>
      </div>
      <div>
        <Link to='/AddKeg' style={link3Styling}>Add a new Keg</Link> |
        <Link to='/EditKeg' style={link3Styling}>Edit/Remove Kegs</Link>  
      </div>
    </div>
  );
}
export default EmployeeHome; 