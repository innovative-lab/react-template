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
    flexFlow: 'column',
    alignItems: 'center',
    fontFamily: 'roboto',
    whiteSpace: 'nowrap',
    width: '100%',
    margin: '5px 0 0 0',
    padding: 5,
  },
  subTab:{
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: '5px 0 0 0',
    fontFamily: 'roboto',
    whiteSpace: 'nowrap',
    backgroundColor: 'aliceblue',
    width: '95%',
    overflow: 'hidden',
  },
  tabHead:{
    display: 'flex',
    flexFlow: 'row',
    padding: '10px 10px 10px 24px',
    alignItems: 'center',
    fontFamily: 'roboto',
    whiteSpace: 'nowrap',
    width: '100%',
  },
  tabHeading: {
    marginLeft: 10 ,
  },
  subTabName:{
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    padding: '10px 10px 10px 24px',
    justifyContent: 'center',
    margin: '5px 2px',
    backgroundColor: '#89daca',
    padding: '2px',
    width: '100%',
  }
});
class SideNavBar extends React.Component {
  constructor(props){
    super(props)

    this.state={
      tabset: [],
      openSubTab: false,
    }
  }
  componentWillMount(){
    this.setState({
      tabset: Tabs
    })
  }
  openTab(tabId){
    
       this.setState({
        ...this.state,
        tabset: {
          ...this.state.tabset,
          tabs: this.state.tabset.tabs.map(itm=>{ 
            if(itm.id === tabId){
              itm.isOpen = !itm.isOpen
            }      
          return itm
          }),
        }
       }) 
      
  }
  render() {
    const { classes, openSideDrawer, history } = this.props;
    return (
      <div
        className={classnames(
          styles['side-nav-bar'],
          openSideDrawer
            ? styles['side-nav-bar-open']
            : styles['side-nav-bar-closed'],
        )}
      >
        <div className={classnames(classes.tabsHolder, !openSideDrawer? styles['center_align']: '')}>
          {/* <FontAwesomeIcon icon={faCoffee} /> */}
          {this.state.tabset &&
            this.state.tabset.tabs.map(itr => {
              return (
                <div className={classes.tab}>
                  <div className={classes.tabHead}>
                    <FontIcon icon={itr.icon} size={20} className={openSideDrawer? styles['fadeIn']: ""}/>
                  
                    <span 
                      className={classnames(classes.tabHeading,
                        openSideDrawer? styles['fadeIn']: styles['fadeOut'])}
                      onClick={()=> history.push(itr.path)}
                    >
                      {itr.name}
                    </span>
                    <div className={styles['flex-grow']}/>
                    {itr.type === 'multiChild' && (
                      <span className={itr.isOpen ? styles['rotate-right']: styles['rotate-left']}>
                        <FontIcon icon={'angle-down'} onClick={()=> this.openTab(itr.id)}/>
                      </span>
                    )}
                  </div>
                  
                  <div className={classnames(classes.subTab, itr.isOpen? styles['dropdown']: styles['dropup'])}>
                    {itr.subTabs && itr.subTabs.length && itr.subTabs.map(stab=>{
                      return (
                        <div className={classes.subTabName}>
                          {stab.name}
                        </div>
                      )
                    })}
                  </div>
                  
                </div>
                
                
              );
            })}
        </div>
      </div>
    );
  }
}

export default withStyles(style)(SideNavBar);
