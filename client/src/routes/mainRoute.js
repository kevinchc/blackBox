import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from  'react-router-dom';

import { AdminRoute } from '../routes/adminRoute';
import { ClientRoute } from '../routes/clientRoute';

import '../App.css';
const MainRoute = (props) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={ ClientRoute }/>
                <Route path="/admin" component= { AdminRoute }/>
                <Redirect to="/admin"/>
            </Switch>
        </BrowserRouter>
    )
}

export { MainRoute }