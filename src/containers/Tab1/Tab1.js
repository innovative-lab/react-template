import React from 'react'
import { withStyles } from 'material-ui/styles';
import { classes } from 'istanbul-lib-coverage';

const styles= ()=>({
  dashboardContainer:{

  }
})

class Tab1 extends React.Component{
  render(){
    const {classes} = this.props
    return (
      <div className={classes.dashboardContainer}>This is Tab1</div>
    )
  }
}

export default withStyles()(Tab1)