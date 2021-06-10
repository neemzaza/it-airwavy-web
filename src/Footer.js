import React from 'react'
import Logo from './img/NewLogo2021.png'
import DevLogo from './img/airwavydevnew.png'

export default function Footer() {
    return (
        <>
            <div className="line" id="hereshow">
                <div className="container">
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
                        <div className="follow" id="follow">
                            <div className="container">
                                <br />
                                <h1><b>FOLLOW ME!&nbsp;<i className="icontada bi bi-chat-square-quote-fill animate__animated" id="icontada"></i></b></h1>
                                <hr/>
                                    <div className="row">
                                        <div className="col-sm-4"><a href="https://youtube.com/c/AirwavyIT"><i className="yt iconsize bi bi-youtube"></i></a></div>
                                        <div className="col-sm-4"><a href="https://facebook.com/Airwavy"><i className="fb iconsize bi bi-facebook"></i></a></div>
                                        <div className="col-sm-4" id="dev"><img className="dev" src={DevLogo} width="170" /></div>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                                <div className="footer" id="footer">
                                    <div className="container">
                                        <br />
                                        <p>© 2020 - 2021 ลิขสิทธิ์โดย Airwavy (Sarut Ardnarong) สงวนลิขสิทธิ์</p>
                                        <p>ออกแบบหน้าเว็บและลูกเล่นโดย Airwavy (DesigN version 2)</p>
                                        <p>เจ้าของเว็บและผู้ถูกกล่าวถึงคือ Airwavy</p>
                                        <br />
                                            <p>โฮสติงน์เว็บโดย Heroku</p>
                                            <hr /> 
                                            <br />
                                            <div className="righticon">
                                                <a href="#" className="nondeco"><img src={Logo} width="40" />&nbsp;AirwavyIT</a>
                                            </div>
                                            <br />
                                        </div>
                                                                        </div>
                                            </>

    )
}
