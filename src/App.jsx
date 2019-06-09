import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import HelloWorld from './components/hello-world';
import AppLayout from './containers/AppLayout/AppLayout';

import { HashRouter, Route, Switch } from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/500" name="Page 500" render={props => (<div>500 Page</div>)} />
              <Route path="/" name="Home" render={props => <AppLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default hot(App);
