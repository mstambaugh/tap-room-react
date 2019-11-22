import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
// import { v4 } from 'uuid';
 

const QuoteStyles = {
  color: '#8da686',
  border: '10px inset #8da686',
  padding: '30px',
  margin: '50px',
  fontStyle: 'italic',
  fontSize: '30px',
  textAlign: 'justify'

};
const TomWaitsStyles = {
  color: '#c9ba32',
  textAlign: 'right',
  paddingRight: '50px',
  fontSize: '30px'
};
const TapListStyles = {
  backgroundColor: '#879484',
  color: '#fce7d9',
  borderLeft: '15px double #c9ba32',
  padding: '50px',
  margin: '50px',
  fontSize: '25px',
  fontFamily: 'Arial',

};
// var masterKegList = [
//   {
//     name: 'Two Hearted Ale',
//     brand: 'Bell\'s Brewery',
//     location: 'Kalamazoo, Michigan',
//     variety: 'American IPA',
//     price: '4.50',
//     abv: '7.0%',
//     pintsleft: '46'
//   },
//   {
//     name: 'Porter',
//     brand: 'Founders Brewing Co.',
//     location: 'Grand Rapids, Michigan',
//     variety: 'Robust Porter',
//     price: '5.00',
//     abv: '6.5%',
//     pintsleft: '121'
//   }
// ];

function TapList(props) {
  return (
    <div>
    <h3 style={QuoteStyles}>I don't have a drinking problem 'Cept when I can't get a drink.</h3>
    <h4 style={TomWaitsStyles}>~~~Tom Waits</h4>
    <h2 style={TapListStyles}></h2>
      
      {props.tapList.map((keg) =>
        <Keg name={keg.name}
          brand={keg.brand}
          location={keg.location}
          variety={keg.variety}
          price={keg.price}
          abv={keg.abv}
          pintsLeft={keg.pintsleft}
          key={keg.id} />
      )}
    </div>
  );
}
TapList.propTypes = {
  tapList: PropTypes.array
};
export default TapList;
// export {masterKegList};