import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './JS'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

import Comm from './Comm'
import Dev from './Dev'

class App extends React.Component {
    render() {
        return (
            <Router forceRefresh>
                <Navbar />
                
                {/* Body */}
                <Switch>
                    <Route path="/" exact={true}>
                        <HomePage />
                        <Footer /> 
                    </Route>

                    <Route path="/comm">
                        <Comm />
                        <Footer /> 
                    </Route>

                    <Route path="/dev">
                        <Dev />
                        <Footer /> 
                    </Route>
                </Switch>
            </Router>
        );
    }

}

function HomePage() {
    return (
        <>
            <Home />
        </>
    )
}

// JavaScript Zone
function JS() {
    return <JS />
}

export default App