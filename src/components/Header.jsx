import React from 'react';
import { Link } from 'react-router-dom';

const headerStyling = {
  backgroundColor: 'F7F3E3',
  color: '6F1A07',
  textAlign: 'center'
};

const link1Styling = {
  color: 'gold',
};
const link2Styling = {
  color: 'orange'
};
// const employeeHeaderStyling = {
//   float: 'right',
//   color: 'white'
// };
function Header() {
  return (
    <div style={headerStyling}>
      <h1>Rad Midwestern Craft Beer Hall</h1>
      <hr/>
      <div>
        <Link to='/TapList' style={link1Styling}>Beers on Tap</Link>  
        <Link to='/EmployeeHome' style={link2Styling}>Employee Menu</Link>
      </div>
    </div>
  );
}

export default Header;