import React from 'react';
import PropTypes from 'prop-types';

const TapListBreakStyles = {
  border: '3px dotted #8da686',
};
const TapListTextStyles = {
  color: '#8da686'
};
function Keg(props) {
  return (
    <div>
      <h2 style={TapListTextStyles}>{props.name} ({props.variety}),<em>{props.abv}</em></h2>
      <h3 style={TapListTextStyles}>{props.brand} of {props.location}</h3>
      <h3 style={TapListTextStyles}>${props.price}: {props.pintsavailable}</h3>
      <div style={TapListBreakStyles}>
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
  pintsavailable: PropTypes.int.isRequired
};

export default Keg;