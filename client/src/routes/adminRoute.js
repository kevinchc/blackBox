import React from 'react';
import { BrowserRouter, Switch, Link, Route, Redirect, } from 'react-router-dom';
import Header from '../components/Admin/Header/Header';

const AdminRoute = (props) => {
    return(
        <BrowserRouter>
            <div>
                <header>
                    <Header/>
                </header>
            </div>
        </BrowserRouter>
    )
}

export {AdminRoute}