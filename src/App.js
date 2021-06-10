import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './JS'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

class App extends React.Component {
    componentDidMount() {
        <JS />
    }
    render() {
        return (
            <Router>
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

function Comm() {
    return (
        <>
            <h1 class="text-white">Community zone</h1>
        </>
    )
}

function Dev() {
    return (
        <>
            <h1 class="text-white">Dev zone</h1>
        </>
    )
}

// JavaScript Zone
function JS() {
    return <JS />
}

export default App