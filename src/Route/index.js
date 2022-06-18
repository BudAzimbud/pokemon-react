import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PublicRoute from './PublicRoute'
import routes from './route'

function index() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {
                        if (route.public) {
                            return (
                                <Route path={route.path} key={index} render={(props) => (<PublicRoute>{route.element}</PublicRoute>)} />
                            )
                        }
                        return (
                            <Route path={route.path} key={index} render={(props) => { return route.element }} />
                        )

                    })}
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default index