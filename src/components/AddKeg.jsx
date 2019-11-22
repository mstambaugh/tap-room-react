import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';
import { v4 } from 'uuid';

function AddKeg(props) {
  let _name = null;
  let _brand = null;
  let _location = null;
  let _variety = null;
  let _price = null;
  let _abv = null;
  let _pintsLeft = null;

  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({ name: _name.value, brand: _brand.value, location: _location.value, variety: _variety.value, price: _price.value, abv: _abv.value, id: v4() });
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
  return (
    <div>
      <div>
        <h2>I've lost my equilibrium, my car keys, and my pride.</h2>
        <h3>~~~Tom Waits</h3>
        <hr />
      </div>
      <form>
        <h2>Add a new keg to the Taplist</h2>
        <input
          type='text'
          id='name'
          placeholder='Name' />
        <input
          type='text'
          id='location'
          placeholder='Brewer location' />
        <input
          type='text'
          placeholder='Brewer' />
        <input
          type='text'
          placeholder='Beer variety' />
        <input
          type='text'
          placeholder='Price per Pint' />
        <input
          type='text'
          placeholder='ABV' />
        
        <button type='submit'>Add Keg to the TapList</button>
      </form>
    </div>
  );
}
export default AddKeg;
       
