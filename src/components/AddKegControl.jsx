import React from 'react';
import NewKeg from './NewKeg';
import PropTypes from 'prop-types';
import EmployeeHome from './EmployeeHome';

class NewKegControl extends React.Component {

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
      currentlyVisibleContent = <EmployeeHome onEmployeeVerification={this.props.handleEmployeeVerification} />;
    } else {
      currentlyVisibleContent = <NewKeg onNewKegCreation={this.props.onNewKegCreation} />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;