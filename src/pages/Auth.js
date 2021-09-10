import React from 'react';
import {Route} from 'react-router-dom'
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";

const Auth = () => {
    return (
        <div>
            <Route path='/' exact component={Login}/>
            <Route path='/registration' exact component={Registration}/>
        </div>

    );
};

export default Auth;