/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { withStyles } from 'material-ui/styles';

const style = () => ({
  mainView: {
    height: '100%',
    flex: 1,
  },
});

class MainView extends React.Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.mainView}>
        {children}
      </div>
    );
  }
}

export default withStyles(style)(MainView);
