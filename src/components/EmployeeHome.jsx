import React from 'react';
// import Keg from './Keg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const QuoteStyles = {
  color: '#093b14',
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
const link3Styling = {
  color: '#dead9b',
  fontSize: '25px',
  // top: '20%',
  fontWeight: 'bold',
  // position: 'relative',
  padding: '3px',
  marginRight: '50px',
  border: '5px inset #cc8f78',
  textDecoration: 'none',
  fontFamily: 'Arial',
  textAlign: 'justify'
};
const TitleStyles = {
  marginBottom: '20px',
  color: '#8da686',
  borderBottom: '5px inset #81909c',
  fontSize: '40px'
};
const TitleStyles2 = {
  marginBottom: '50px',
  color: '#8da686',
  borderBottom: '5px inset #81909c',
  fontSize: '40px'
};
// const TapListStyles = {
//   margin: '30px',
//   paddingLeft: '50px',
//   paddingRight: '50px',
//   color: '#8da686',
//   backgroundColor: '#879484',
// };
// 

// add verification? Ask if you are rly an employee? Add edit keg, import taplist to employeehome, add buttons to sell/buy pints. 
function EmployeeHome(props) {
  return (
    <div>
      <div>
        <h3 style={QuoteStyles}>A gentleman is someone who can play the accordion, but doesn't.</h3>
        <h4 style={TomWaitsStyles}>~~~Tom Waits</h4>
      </div>
      <div>
        <h2>Add a New Keg to the TapList?</h2>
        <button onClick={props.onHandleEmployeeHome}>Yes</button>
      </div>
      <h2 style={TitleStyles}>On Tap</h2>
      <h2 style={TitleStyles2}>Almost tapped Out!</h2>  

      <Link to='/AddKeg' style={link3Styling}>Add a new Keg</Link> 
    </div>
  );
}
EmployeeHome.propTypes = {
  onHandleEmployeeHome: PropTypes.func
};
export default EmployeeHome; 