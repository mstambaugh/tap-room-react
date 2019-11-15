import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>
      <h2>{props.name} - {props.brand}</h2>
      <h3>{props.variety} - {props.location}</h3>
      <h3>{props.price} - <em>{props.abv}</em></h3>
      <hr/>
    </div>
  );
}
Ticket.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  variety: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired
};

export default Keg;