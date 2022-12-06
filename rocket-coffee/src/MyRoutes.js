import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/patterns/Navigation/Navigation';

import Cart from './screens/Cart/Cart';
import Products from './screens/Products/Products';
import UserProfile from './screens/UserProfile/UserProfile';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/cart" component={Cart}/>
                <Route path="/userProfile" component={UserProfile}/>
                <Route path="/" component={Products}/>
            </Routes>
        </BrowserRouter>
    );
}