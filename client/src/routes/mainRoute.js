import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from  'react-router-dom';
import Home from '../components/Home/Home';
import Header from '../components/Header/Header';
import Store from '../components/Store/Store';
import Android from '../components/Android/Android';
import Apple from  '../components/Apple/Apple';
import Contact from '../components/Contact/Contact';
const MainRoute = (props) => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/store" component= {Store}/>
                    <Route path="/android" component= {Android}/>
                    <Route path="/apple" component= {Apple}/>
                    <Route path="/contact" component={Contact}/>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export { MainRoute }