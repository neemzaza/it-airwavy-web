import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './App.scss'
import Logo from './img/NewLogo2021.png'
import DevLogo from './img/airwavydevnew.png'
import $ from 'jquery'

export default function Navbar() {
    useEffect(() => {
        $("#navtoggler").on('click', () => {
            $("body").toggleClass("activebody")
            $(".navbar-toggler-iconn").toggleClass("activetog")

            $("#navbar").toggleClass("activemenu")
            $(".navbar-brand").toggleClass("activebrand")
        })

        $("#btnSwitch").on('click', () => {
            $("#btnSwitch").toggleClass("btn-switch-light-and-dark-on")
        })
    })
    return (
        <>  
            <nav className="navbar fixed-top navbar-expand-sm" id="spy">
                    {/* <!--SPY--> */}
                </nav>
            <div className="progressbar fixed-top">
                <div className="progressrod"></div>
            </div>
            <nav className="navbar parallaxbg navbar-expand-sm navbar-dark" id="navbar">
                <div className="container-fluid">
                    <a id="textinner" className="navbar-brand animate__animated" href="#"><img className='logonav' src={Logo} width="30" />&nbsp;Official</a>
                    <h6 className="text-white ontextload">Airwavy loading...</h6><noscript>&nbsp;<a className="btn btn-outline-danger btn-sm " href="#" role="button"><i className="bi bi-exclamation-octagon"></i>&nbsp;ERROR!</a></noscript>
                    
                    {/* toggle (icon mobile) */}
                    <a className="navbar-toggler-iconn" id="navtoggler"><i className="bi bi-menu-button-wide"></i></a>

                    <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav ms-auto">

                            <NavLink className="home nav-link normal whenhover" aria-current="page" to="/" exact={true} ><><i className="bi bi-house-fill"></i><menutext>&nbsp;แนะนำตัว</menutext></></NavLink>
                            <a className="discordmenu nav-link normal whenhover" aria-current="page" href="/#discord"><i className="bi bi-discord" /><menutext>&nbsp;เข้า Discord ของผม</menutext></a>
                            <NavLink className="devmenu nav-link normal whenhover" aria-current="page" to="/dev"><><img src={DevLogo} width="25"/><menutext>&nbsp;AIRWAVY DEVELOPER</menutext></></NavLink>
                            <div className="linew btn-switch-light-and-dark" id="btnSwitch" ><i class="bi bi-sun toggle-theme icon-light"></i><i class="bi bi-moon-fill toggle-theme icon-dark"></i></div>
                        </div>
                    </div>
                </div>
                <div className="mobileshow">
                    <br/><br/><br/>
                        <NavLink className="home nav-link normal" aria-current="page" to="/" exact={true}><b><i className="bi bi-house-fill"></i>&nbsp;แนะนำตัว</b></NavLink>
                        <a className="discordmenu nav-link normal" aria-current="page" to="/#discord"><i className="bi bi-discord" /><menutext>&nbsp;เข้า Discord ของผม</menutext></a>
                        <NavLink className="devmenu nav-link normal" aria-current="page" to="/coming-soon"><b><i className="bi bi-code-slash"></i>&nbsp;AIRWAVY DEVELOPER</b></NavLink>
                </div>
            </nav>
        </>
    )
}

