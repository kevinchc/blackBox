import React from 'react';
import { BrowserRouter, Switch, Link, Route, Redirect, } from 'react-router-dom';
import Header from '../components/Admin/Header/Header';

const AdminRoute = (props) => {
    return(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    )
}

export {AdminRoute}