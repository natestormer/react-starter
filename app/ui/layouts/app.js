import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

let AppLayout = React.createClass({

    displayName : 'AppLayout',

    render()
    {
        return (
            <div className='nav'>
                <Link to='app'>Home</Link>
                <Link to='about'>About</Link>
                <RouteHandler/>
            </div>
        );
    }

});

export default AppLayout;
