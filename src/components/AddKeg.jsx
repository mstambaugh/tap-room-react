import React from 'react';


function AddKeg() {
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
       
