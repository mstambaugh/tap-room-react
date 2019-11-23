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
    this.handleEmployeeHome = this.handleEmployeeHome.bind(this);
  }

  onhandleEmployeeHome() {
    this.setState({ formVisibleOnPage: true });
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewKeg onNewKegCreation={this.props.onNewKegCreation} />;
    } else {
      currentlyVisibleContent = <EmployeeHome onHandleEmployeeHome={this.handleEmployeeHome} />;
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