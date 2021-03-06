import React from 'react';
import { BrowserRouter, Switch, Redirect, Route, Router } from "react-router-dom";
import Home from '../Home';
import AppProvider from './AppProvider';
import Product from '../Product/ProductContainer';
import Progressbar from '../../Components/Progressbar';
import Search from '../Search';
import Cart from '../Cart';

const App = () => (
    <BrowserRouter>
        <AppProvider>
            <AppContainer />
            <Progressbar />
        </AppProvider>
    </BrowserRouter>
)

const AppContainer = () => (
    <Switch>
        <Route path={"/"} component={Home} exact/>
        <Route path={"/product/:product_id"} component={Product} />
        <Route path={"/search"} component={Search}/>
        <Route path={"/cart"} component={Cart}/>
        <Redirect from={"*"} to={"/"} />
    </Switch>
)

export default App;