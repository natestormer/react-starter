import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

// layout components
import AppLayout from './ui/layouts/app.js';

// route handler components
import HomePage from './ui/pages/home.js';
import AboutPage from './ui/pages/about.js';

let Routes = (
    <Route name='app' path='/' handler={AppLayout}>
        <Route name='home' path='/' handler={HomePage} />
        <Route name='about' path='/about' handler={AboutPage}/>
    </Route>
);

export default Routes;
