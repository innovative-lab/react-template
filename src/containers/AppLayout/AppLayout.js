import React from 'react';
import { withStyles } from 'material-ui/styles';

// import { classes } from 'istanbul-lib-coverage';
import TopNavBar from '../TopNavBar/TopNavBar';
import MainView from '../MainVIew/MainView';
import SideNavBar from '../SideNavBar/SideNavBar';

import '../../style/style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faAngleDown);

const style = () => ({
  applayout: {
    margin: '0 !important',
    padding: '0 !important',
    boxSizing: 'border-box',
    position: 'relative',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    textAlign: 'center',
    margin: '-8px',
    fontFamily: 'Roboto, sans-serif',
  },
  mainBody: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexFlow: 'row',
  },
});

class Applayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openSideDrawer: null,
    };
  }
  render() {
    const { classes, applayout, children, history } = this.props;
    return (
      <div className={classes.applayout}>
        <TopNavBar
          toggleSideNav={() =>
            this.setState({ openSideDrawer: !this.state.openSideDrawer })
          }
          openSideDrawer={this.state.openSideDrawer}
          history={history}
        />
        <div className={classes.mainBody}>
          <SideNavBar openSideDrawer={this.state.openSideDrawer} history={history}/>
          <MainView history={history}>
            {children || ''}
          </MainView>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Applayout);
