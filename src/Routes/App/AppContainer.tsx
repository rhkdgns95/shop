import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from '../Home';
import AppProvider from './AppProvider';

const App = () => (
    <BrowserRouter>
        <AppProvider>
            <AppContainer />
        </AppProvider>
    </BrowserRouter>
)

const AppContainer = () => (
    <Switch>
        <Route to={"/"} component={Home} exact={true}/>
        <Redirect from={"*"} to={"/"} />
    </Switch>
)

export default App;