import React from 'react';
import PropTypes from 'prop-types';
// import { v4 } from 'uuid';

function EmployeeVerification(props){
  return (
    <div>
      <p>Are you a MidBest Beer employee?</p>
      <button onClick={props.onEmployeeVerification}>Yes</button>
    </div>
  );
}

EmployeeVerification.propTypes = {
  onEmployeeVerification: PropTypes.func
};

export default EmployeeVerification;
