import  React, {Component} from 'react'
import { BrowserRouter, Switch, Route , Redirect} from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';

const RouteMain = (props) => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/Home" component={Home}/>
                    <Redirect to="/Home"/>
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export { RouteMain }