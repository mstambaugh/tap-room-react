import React from 'react';
import Keg from './Keg';
import {masterKegList} from './TapList';
import { Link } from 'react-router-dom';

const QuoteStyles = {
  color: '#baccc1',
  border: '10px inset #3a5741',
  padding: '10px', 
};

const TomWaitsStyles = {
  color: '#093b14', 
  textAlign: 'right'
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

function EmployeeHome() {
  return (
    <div>
      <div>
        <h2 style={QuoteStyles}>A gentleman is someone who can play the accordion, but doesn't.</h2>
        <h3 style={TomWaitsStyles}>~~~Tom Waits</h3>
        <hr />
      </div>
      <div>
        <h2>Kegs currently on Tap</h2>
        {masterKegList.map((keg, index) =>
          <Keg name={keg.name}
            brand={keg.brand}
            location={keg.location}
            variety={keg.variety}
            price={keg.price}
            abv={keg.abv}
            key={index} />
        )}
      </div>
      <div>
        <h2>Almost tapped Out!</h2>   
        <ul></ul>
      </div>
      <div>
        <Link to='/AddKeg' style={link3Styling}>Add a new Keg to the Tap List</Link>
        <Link to='/EditKeg' style={link3Styling}>Edit/Remove Kegs from the Tap List</Link>  
      </div>
    </div>
  );
}
export default EmployeeHome; 