import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { withStyles } from 'material-ui/styles';
import styles from '../../style/style.css';
import FontIcon from '../common/FontIcon';
import Tabs from './SideNavBar.json';

const style = () => ({
  tabsHolder: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  tab: {
    display: 'flex',
    padding: 10,
    flexFlow: 'row',
    margin: 10,
    alignItems: 'center',
    fontFamily: 'roboto',
  },
});
class SideNavBar extends React.Component {
  render() {
    const { classes, openSideDrawer } = this.props;
    console.log('styles', styles);
    return (
      <div
        className={classnames(
          styles['side-nav-bar'],
          openSideDrawer
            ? styles['side-nav-bar-open']
            : styles['side-nav-bar-closed'],
        )}
      >
        <div className={classes.tabsHolder}>
          {/* <FontAwesomeIcon icon={faCoffee} /> */}
          {Tabs &&
            Tabs.tabs.map(itr => {
              return (
                <div className={classes.tab}>
                  <FontIcon icon={itr.icon} size={20} />
                  {openSideDrawer && (
                    <span style={{ marginLeft: 10 }}>{itr.name}</span>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withStyles(style)(SideNavBar);
