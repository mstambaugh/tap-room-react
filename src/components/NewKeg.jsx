import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
// import Moment from 'moment';

function NewKeg(props) {
  let _name = null;
  let _brand = null;
  let _location = null;
  let _variety = null;
  let _price = null;
  let _abv = null;
  let _pintsLeft = null;

  function handleAddingNewKegToTapList(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, location: _location.value, variety: _variety.value, price: _price.value, abv: _abv.value, pintsLeft: _pintsLeft.value, id: v4()});
    _name.value = '';
    _brand.value = '';
    _location.value = '';
    _variety.value = '';
    _price.value = '';
    _abv.value = '';
    _pintsLeft.value = '';
  }
  return (
    <div>
      <h2>Add a new keg to the Taplist?</h2>
      <form onSubmit={handleAddingNewKegToTapList}>
        <input
          type='text'
          id='name'
          placeholder='Name' 
          ref={(input) => { _name = input; }} />
        <input
          type='text'
          id='brand'
          placeholder='Brewery' 
          ref={(input) => { _brand = input; }}/>
        <input
          type='text'
          id='location'
          placeholder='Brewery location' 
          ref={(input) => { _location = input; }}/>
        <input
          type='text'
          id='variety'
          placeholder='Beer variety' 
          ref={(input) => { _variety = input; }}/>
        <input
          type='text'
          id='price'
          placeholder='Price per pint'
          ref={(input) => { _price = input; }} />
        <input
          type='text'
          id='abv'
          placeholder='ABV'
          ref={(input) => { _abv = input; }} />
        <input
          type='text'
          id='pintsLeft'
          placeholder='Pints in keg'
          ref={(input) => { _pintsLeft = input; }} />
        
        <button type='submit'>Add Keg to the TapList</button>
      </form>
    </div>
  );
}
NewKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKeg;
       
