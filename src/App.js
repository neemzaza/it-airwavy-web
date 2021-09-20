import React, { useEffect, useState } from 'react'
import './scss/App.scss'
import './scss/Light.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './JS'
import $ from 'jquery'
import axios from 'axios'

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
    const lightTheme = window.matchMedia("(prefers-color-scheme: light)")
    if (lightTheme.matches) {
        // document.getElementById
    } else {

    }
    const serverURL = "https://it-airwavy-server-1.herokuapp.com"
    const localURL = "http://localhost:5000"
    const [allMsg, setAllMsg] = useState([])


    // let 

    
    // console.log(allMsg)
    const getAllMsg = async() => {
            await axios.get(`${serverURL}/gettext`).then(res => {
                setAllMsg(res.data)
            })
    }

    const randomMath = Math.floor(Math.random() * 100)

    function chanceCal() {
        if (randomMath < 33) {
            return allMsg[0]
        } else if (randomMath >= 34 && randomMath < 34 * 2) {
            return allMsg[1]
        } else if (randomMath >= 34 * 2) {
            return allMsg[2]
        }
    }
    

    useEffect(() => {
        
        getAllMsg()

        
    }, [])
    $(window).on('load', () => {
        $("#outload").fadeOut()
        $(".ontextload").fadeOut()
        $("#onTimegreat").fadeOut()
    })
    return (
        <Router forceRefresh>
            <div className="loading-page" id="outload">
                <center>
                    <h4>Welcome to Airwavy!! Website</h4>
                    <div class="cardwow">
                        <p id="suggestion-msg">
                            {chanceCal()}
                        </p>
                    </div>
                    <h4 class="text-white" id="onTimegreat">
                        
                    </h4>
                </center>
            </div>
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
                    <div className="can-scroll-on-hidden-overflow">
                        <Footer />
                    </div>
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