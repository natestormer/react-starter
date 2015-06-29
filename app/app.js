import React from 'react';
import Router from 'react-router';
import Routes from './routes.js';

React.initializeTouchEvents(true);

let flux     = null;
let locales  = null;
let location = Router.HistoryLocation;

Router.run(Routes, location, (Handler) => {

    React.render(
        React.createElement(Handler, {
            flux     : flux,
            locales  : locales
        }),
        window.document.body
    );

});
