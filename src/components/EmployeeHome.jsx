import React from 'react';
import Keg from './Keg';
import {masterKegList} from './TapList';

const QuoteStyles = {
  color: '#baccc1',
  border: '10px inset #3a5741',
  padding: '10px', 
};

const TomWaitsStyles = {
  color: '#093b14', 
  textAlign: 'right'
};
// const masterKegList = [
//   {
//     name: 'Two Hearted Ale',
//     brand: 'Bell\'s Brewery',
//     location: 'Kalamazoo, Michigan',
//     variety: 'American IPA',
//     price: '4.50',
//     abv: '7.0%'
//   },
//   {
//     name: 'Porter',
//     brand: 'Founders Brewing Co.',
//     location: 'Grand Rapids, Michigan',
//     variety: 'Robust Porter',
//     price: '5.00',
//     abv: '6.5%'
//   }
// ];

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
    </div>
  );
}
export default EmployeeHome; 