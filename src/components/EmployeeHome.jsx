import React from 'react';
// import Keg from './Keg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import TapList from './TapList';


const QuoteCardStyles = {
  color: '#8da686',
  border: '10px inset #8da686',
  padding: '30px',
  fontStyle: 'italic',
  fontSize: '30px'
};

const TomWaitsStyles = {
  color: '#c9ba32',
  textAlign: 'right',
  fontSize: '30px'
};
const link3Styling = {
  color: '#cc8f78',
  fontSize: '25px',
  fontWeight: 'bold',
  fontFamily: 'Arial',
  textDecoration: 'none',

};
const TitleStyles = {
  borderBottom: '5px inset #81909c',
  fontSize: '40px'
};
const TitleStyles2 = {
  marginBottom: '50px',
  borderBottom: '5px inset #81909c',
  fontSize: '40px'
};


const CardStyles = {
  color: '#8da686',
  backgroundColor: '#879484',
  borderLeft: '15px double #c9ba32',
  padding: '50px',
  fontSize: '25px',
  fontFamily: 'Arial',
};


// add verification? Ask if you are rly an employee? Add edit keg, import taplist to employeehome, add buttons to sell/buy pints. 
function EmployeeHome(props) {
  return (
    <div>
      <div className='row'>
        <div className='col l10 m10'>
          <div className='card' style={QuoteCardStyles}>
            <h3>A gentleman is someone who can play the accordion, but doesn't.</h3>
            <h4 style={TomWaitsStyles}>~~~Tom Waits</h4>
          </div>
          <div className='card' style={CardStyles}>
            <h2>Add a New Keg to the TapList?</h2>
            <button onClick={props.onHandleEmployeeHome}>Yes</button>
            <h2 style={TitleStyles}>On Tap</h2>
            <h2 className='card'></h2>

            <h2 style={TitleStyles2}>Almost tapped Out!</h2>  
            <ul>
              <li style={link3Styling}><Link to='/NewKeg' style={link3Styling}>AddKeg</Link></li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
EmployeeHome.propTypes = {
  onHandleEmployeeHome: PropTypes.func
};
// TapList.propTypes = {
//   tapList: PropTypes.array
// };
// Keg.propTypes = {
//   name: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   brand: PropTypes.string.isRequired,
//   variety: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
//   abv: PropTypes.string.isRequired,
//   pintsLeft: PropTypes.string.isRequired
// };

export default EmployeeHome; 