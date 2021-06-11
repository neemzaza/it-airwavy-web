import React from 'react'
import Logo from './img/NewLogo2021.png'
import DevLogo from './img/airwavydevnew.png'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="line" id="hereshow">
                <div className="container">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>
            </div>
            <div className="follow" id="follow">
                <div className="container">
                    <br />
                    <h1><b>FOLLOW ME!&nbsp;<i className="icontada bi bi-chat-square-quote-fill animate__animated" id="icontada"></i></b></h1>
                    <hr />
                    <div className="row">
                        <div className="col-sm-4"><a href="https://youtube.com/c/AirwavyIT"><i className="yt iconsize bi bi-youtube"></i></a></div>
                        <div className="col-sm-4"><a href="https://facebook.com/Airwavy"><i className="fb iconsize bi bi-facebook"></i></a></div>
                        <div className="col-sm-4" id="dev"><img className="dev" src={DevLogo} width="170" alt="Airwavy's Dev Logo"/></div>
                    </div>
                    <br />
                </div>
            </div>
            <div className="footer" id="footer">
                <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <br />
                        <h1 className="text-end"><b>INFO THIS WEB</b></h1>
                        <p className="paratext">© 2020 - 2021 ลิขสิทธิ์โดย Airwavy (Sarut Ardnarong) สงวนลิขสิทธิ์</p>
                        <p className="paratext"><i className="bi bi-vector-pen"></i>   ออกแบบหน้าเว็บและลูกเล่นโดย Airwavy (DesigNWavy version 3)</p>
                        <p className="paratext"><i className="bi bi-person-square"></i>   เจ้าของเว็บและผู้ถูกกล่าวถึงคือ Airwavy</p>
                        <br />
                        <p className="paratextPurple"><i className="bi bi-hdd-network"></i>  โฮสติงน์เว็บโดย Heroku</p>
                        <br />
                        <br />
                    </div>
                    <div className="col-sm-6 navfooter">
                        <br /> 
                        <h1 className="text-decoration-underline blue">NAVIGATION</h1>
                        <NavLink className="home nav-link normal" aria-current="page" to="/" exact={true} ><b><i className="bi bi-house-fill"></i>&nbsp;แนะนำตัว</b></NavLink>
                        <NavLink className="comm nav-link normal" aria-current="page" to="/comm"><b><i className="bi bi-stickies-fill"></i>&nbsp;ชุมชน (สำรอง)</b></NavLink>
                        <NavLink className="devmenu nav-link normal" aria-current="page" to="/dev"><b><img src={DevLogo} width="25" alt="Airwavy's Dev Logo" />&nbsp;AIRWAVY DEVELOPER</b></NavLink>
                        <div className="linew"></div>
                        <br />
                    </div>
                    <hr />
                    <div className="righticon">
                        <a href="#" className="nondeco"><img src={Logo} width="40" alt="Airwavy's Logo"/>&nbsp;AirwavyIT</a>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
                </div>
            </div>
        </>

    )
}
