import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './route'
import Layout from '../Layout'

function index() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {
                        if (route.public) {
                            return (
                                <Route path={route.path} key={index} render={(props) => (<Layout>{route.element}</Layout>)} />
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