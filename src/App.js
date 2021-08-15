import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './JS'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

import Comm from './Comm'
import Dev from './Dev'
import Eiei from './Eiei'
import NotFound from './NotFound'

//WIP Page
import WIP from './WIP'

const commPageFinish = false

const App = () => {
    useEffect(() => {
        
    }, [])
        return (
            <Router forceRefresh>
                <Navbar />
                
                {/* Body */}
                <Switch>
                    <Route path="/" exact={true}>
                        <Home />
                        <Footer /> 
                    </Route>

                    <Route path="/comm">
                        {commPageFinish !== false ? 
                        <>
                            <Comm />
                            <Footer /> 
                        </>
                        :
                        <WIP />
                        }
                    </Route>

                    <Route path="/dev">
                        <Dev />
                        <Footer /> 
                    </Route>

                    <Route path="/eiei">
                        <Eiei />
                        <Footer /> 
                    </Route>

                    <Route component={NotFoundPage}>

                    </Route>
                </Switch>
            </Router>
        );
    }

// JavaScript Zone
function JS() {
    return <JS />
}

function NotFoundPage() {
    return <NotFound />
}

export default App