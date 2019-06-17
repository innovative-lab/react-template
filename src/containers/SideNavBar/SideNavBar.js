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
  },
  floatingNavBar:{
    padding: '10px',
    backgroundColor: 'cyan',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
  }
});
class SideNavBar extends React.Component {
  constructor(props){
    super(props)

    this.state={
      tabset: [],
      openSubTab: [],
      subTabPosition: {},
    }
  }
  componentWillMount(){
    this.setState({
      tabset: Tabs,
      openSubTab: Array(Tabs.tabs.length)
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

  renderFloatingNavBar(tab){
    const {classes, history} = this.props
    return (
      <div 
        className={classes.floatingNavBar}
        style={{left: 70, top: this.state.subTabPosition?this.state.subTabPosition.top - 55 : 0}}
      >
        <div onClick={tab.type === 'multiChild'?()=>{}:()=> history.push(tab.path)}>        
          {tab.name}          
        </div>  
         {tab.subTabs && tab.subTabs.map(stab=>{
                      return (
                        <div>
                          <div 
                            className={classes.subTabName}
                            onClick={()=> history.push(stab.path)}
                          >
                            {stab.name}
                          </div>
                        </div>
                       
                      )
                    })}
    </div>
    )
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
            this.state.tabset.tabs.map((itr,i) => {
              return (
                <div className={classes.tab}>
                  <div 
                    className={classes.tabHead}
                    onMouseOver ={(e)=> {

                      if(true){
                        let openSubTabCopy = this.state.openSubTab
                        openSubTabCopy[i] = true
                      this.setState({
                        subTabPosition: e.currentTarget.getBoundingClientRect(),
                        openSubTab: [...openSubTabCopy],
                      })
                      console.log('hovering', e.currentTarget.getBoundingClientRect())}
                    }}
                    onMouseLeave = {()=>{
                      let openSubTabCopy = this.state.openSubTab
                      openSubTabCopy[i] = false
                      this.setState({
                        subTabPosition: {},
                        openSubTab: [...openSubTabCopy]
                      })
                    }}
                    >
                    <FontIcon 
                      icon={itr.icon} 
                      size={20} 
                      className={openSideDrawer? styles['fadeIn']: ""}
                    />
                    {this.state.openSubTab[i] && this.state.openSubTab && !openSideDrawer && this.renderFloatingNavBar(itr)}
                    <span 
                      className={classnames(classes.tabHeading,
                        openSideDrawer? styles['fadeIn']: styles['fadeOut'])}
                      onClick={itr.type==='multiChild'?()=> this.openTab(itr.id):()=> history.push(itr.path)}
                    >
                      {itr.name}
                    </span>
                    <div className={styles['flex-grow']}/>
                    {itr.type === 'multiChild' && openSideDrawer && (
                      <span className={itr.isOpen ? styles['rotate-right']: styles['rotate-left']}>
                        <FontIcon icon={'angle-down'} onClick={()=> this.openTab(itr.id)}/>
                      </span>
                    )}
                  </div>
                  
                  <div className={classnames(classes.subTab, (itr.isOpen && openSideDrawer )? styles['dropdown']: styles['dropup'])}>
                    {itr.subTabs && itr.subTabs.length && itr.subTabs.map(stab=>{
                      return (
                        <div className={classes.subTabName}
                        onClick={()=> history.push(stab.path)}
                        >
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
