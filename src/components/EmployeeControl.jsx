import React from 'react';
import PropTypes from 'prop-types';
import EmployeeHome from './EmployeeHome';
import EmployeeVerification from './EmployeeVerification';

class EmployeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleEmployeeVerification = this.handleEmployeeVerification.bind(this);
  }

  handleEmployeeVerification() {
    this.setState({ formVisibleOnPage: true });
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <EmployeeHome onHandleEmployeeHome={this.props.onHandleEmployeeHome} />;
    } else {
      currentlyVisibleContent = <EmployeeVerification onEmployeeVerification={this.handleEmployeeVerification} />;
    }

    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

EmployeeControl.propTypes = {
  onHandleEmployeeHome: PropTypes.func
};

export default EmployeeControl;