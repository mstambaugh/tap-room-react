import React from 'react';
import AddKeg from './AddKeg';
import PropTypes from 'prop-types';
import EmployeeHome from './EmployeeHome'

class AddKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleEmployeeHome = this.handleEmployeeHome.bind(this);
  }

  handleEmployeeHome() {
    this.setState({ formVisibleOnPage: true });
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <AddKeg onNewKegCreation={this.props.onNewKegCreation} />;
    } else {
      currentlyVisibleContent = <EmployeeHome employeeHome={this.handleEmployeeHome} />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

AddKegControl.propTypes = {
  onAddKegCreation: PropTypes.func
};

export default AddKegControl;