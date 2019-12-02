import React from 'react';
import PropTypes from 'prop-types';


const TapListBreakStyles1 = {
  borderBottom: '5px dotted #c9ba32',
  paddingTop: '40px',
  marginTop: '10px',
};
const TapListBreakStyles2 = {
  borderTop: '5px dotted #c9ba32',
  marginBottom: '10px',
  paddingBottom: '40px',
};
const TapListTextStyles = {
  color: '#fce7d9',
  fontFamily: 'Arial',
 
};

function Keg(props) {

  return (
    <div>
      <div style={TapListBreakStyles1}>
      </div>
      <h2 style={TapListTextStyles}>{props.name} ({props.variety}),<em>{props.abv}</em></h2>
      <h3 style={TapListTextStyles}>{props.brand} of {props.location}</h3>
      <h3 style={TapListTextStyles}>${props.price}: {props.pintsLeft}</h3>
      <button onClick={props.onPintSale}>Order a pint!</button>
      <div style={TapListBreakStyles2}>
      </div>
    </div>
  );
}
Keg.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  variety: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  pintsLeft: PropTypes.int,
  
};
Keg.propTypes = {
  onPintSale: PropTypes.func
};

export default Keg;