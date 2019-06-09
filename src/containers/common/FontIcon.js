import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class FontIcon extends React.Component {
  render() {
    const { icon, customClass, size } = this.props;
    console.log('FontAwesomeIcon', FontAwesomeIcon);
    return (
      <FontAwesomeIcon icon={icon} style={{ height: size, width: size }} />
    );
  }
}

FontIcon.propTypes = {
  size: PropTypes.string,
};

// FontIcon.defaultProps = {
//   size: 25
// }

export default FontIcon;
