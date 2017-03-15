//import _ from 'lodash';
import React from 'react';
import { Provider } from 'react-redux'
import Alert from 'react-s-alert';
import { BrowserRouter, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import Routes from '../routes'

import Debug from 'debug';
let debug = new Debug("rootView");

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const history = createHistory()

export default function RootView(store, parts){
    debug('RootView');
    const routes = Routes(store, parts);

    debug('RootView ', routes);

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <BrowserRouter>
                  <div>
                      {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                      ))}
                      <Alert stack={{limit: 3}} />
                  </div>
                </BrowserRouter>

            </ConnectedRouter>
        </Provider>
    )
}
