import React from 'react';
import navBar from '../../core/components/navbar';
import footer from '../../core/components/footer';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Route} from 'react-router-dom';
import './application.styl';

const muiTheme = getMuiTheme(baseTheme);

// eslint-disable-next-line no-undef
let version = __VERSION__;

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

export default(context) => {
  const NavBar = navBar(context);
  const Footer = footer(context);

  function ApplicationView({
    authenticated,
    routes,
    ...props
  }) {
    console.log("app view ", routes)
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div id="application-view">
          <NavBar authenticated={authenticated}/>
          <div id='main-container' className="container">
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...props} {...route}/>
            ))}
          </div>
          <Footer version={version}/>
        </div>
      </MuiThemeProvider>
    )
  }

  ApplicationView.propTypes = {
    authenticated: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node
  };
  return ApplicationView
}
