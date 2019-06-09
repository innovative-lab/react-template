import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import MenuIcon from 'material-ui-icons/Menu';

import MenuBar from '../../../assets/image/baseline-menu-24px.svg';
import styles from '../../style/style.css';

const style = () => ({
  topNavBar: {
    width: '100vw',
    height: '60px',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#379683',
  },
  companyLogoHolder: {
    width: 200,
    height: '100%',
    backgroundColor: 'whitesmoke',
  },
});
class TopNavBar extends React.Component {
  render() {
    const { classes, toggleSideNav, openSideDrawer } = this.props;
    return (
      <div className={classes.topNavBar}>
        <div
          className={classnames(
            classes.companyLogoHolder,
            openSideDrawer
              ? styles['company-logo-open']
              : styles['company-logo-closed'],
          )}
        />
        <div onClick={() => toggleSideNav()}>
          <img
            className={classnames(
              styles['menubar'],
              openSideDrawer ? styles['rotate-right'] : styles['rotate-left'],
            )}
            src={MenuBar}
          />
          <i className="fa fa-star" style={{ height: 100, width: 100 }} />
        </div>
      </div>
    );
  }
}

export default withStyles(style)(TopNavBar);
