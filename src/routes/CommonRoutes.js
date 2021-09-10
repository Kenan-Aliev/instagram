import {Switch,Route,Redirect} from 'react-router-dom'
import React from 'react'
import Auth from "../pages/Auth";


export default function CommonRoutes() {
    const commonRoutes = [
        {path: '/', component: Auth},
        {path: '/registration', component: Auth}
    ]
    return (
        <Switch>
            {commonRoutes.map((item) => (
                <Route key={item.path} path={item.path} component={item.component} exact/>
            ))}
            <Redirect to={'/'} component={Auth} exact/>
        </Switch>
    )
}