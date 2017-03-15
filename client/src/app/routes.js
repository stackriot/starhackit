// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
//import React from 'react';

export default function Routes(store, parts) {

  function isAuthenticated(param, replaceState) {
    if(!store.getState().auth.auth.authenticated){
      const nextPath = param.location.pathname;
      replaceState(`/login?nextPath=${nextPath}`)
    }
  }


  return [
      {
        path: '/',
        component: parts.auth.containers().app(),
        routes: [
          {
            path:"/ll",
            component: parts.auth.containers().login()
          },
          ...parts.auth.routes(store).routes,
          ...parts.profile.routes(store),
          {
            path: 'app',
            onEnter: isAuthenticated,
            routes: parts.profile.routes(store)
          }/*,
          {
            path: 'admin',
            onEnter: isAuthenticated,
            routes: parts.admin.routes(store, parts).routes
          },
          {
            path: 'db',
            onEnter: isAuthenticated,
            routes: parts.db.routes(store, parts).routes
          }
*/
        ]
      },
    ]
}
