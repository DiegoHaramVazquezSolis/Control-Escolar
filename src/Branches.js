import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from './modules/HomePage/HomePage';
import Login from './modules/Login/Login';
import Perfil from './modules/Perfil/Perfil';

export const Branches = () => {
    return(
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/perfil" component={Perfil} />
        </Switch>
    )
}