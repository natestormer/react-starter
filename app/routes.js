import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

// layout components
import AppLayout from './ui/layouts/app.js';

// route handler components
import LoginHandler from './ui/components/Login.js';

let Routes = (
  <Route name="app" path="/" handler={AppLayout}>
    <Route name="login" path="/login" handler={LoginHandler}/>
  </Route>
);

export default Routes;
