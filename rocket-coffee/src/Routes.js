import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/patterns/Navigation/Navigation';

import Cart from './screens/Cart/Cart';
import Products from './screens/Products/Products';
import UserProfile from './screens/UserProfile/UserProfile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route path="/cart" component={Cart}/>
                <Route path="/userProfile" component={UserProfile}/>
                <Route path="/" component={Products}/>
            </Switch>
        </BrowserRouter>
    );
}