import React, { useEffect, useState } from 'react'
import './App.scss'
import './Light.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './JS'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'

import Comm from './Comm.jsx'
import Dev from './Dev.jsx'
import Eiei from './Eiei.jsx'
import Pop from './Pop'
import NotFound from './NotFound.jsx'

//WIP Page
import WIP from './WIP.jsx'

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

                    <Route path="/pop">
                        <Pop />
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