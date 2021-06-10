import React from 'react'
import './JS'

import Pic1 from './img/post1.jpg'
import Pic2 from './img/post2.jpg'

import YouTubeSubscribe from './downloads/YouTubeSub'


class Home extends React.Component {
    componentDidMount() {
        <JS />
    }
    render() {
        return (
            <div>
                {/* <!-- This is NavBar!! --> */}

                <nav className="navbar fixed-top navbar-expand-sm" id="spy">
                    {/* <!--SPY--> */}
                </nav>

                {/* <%- include('navbar') %> */}
                <nav className="airwavyzone navbar navbar-expand-sm navbar-light fixed-top bg-light hider animate__animated">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="#"></a> */}

                        <div className="menuzoneair collapse navbar-collapse" id="navbarIDwow">
                            <div className="navbar-nav escsub">
                                <a className="nav-link" aria-current="page" href="#about" id="aboutmenu"><i className="bi bi-info-circle-fill"></i>&nbsp;เนื้อหาเกี่ยวกับและประวัติ</a>
                                <a className="nav-link" aria-current="page" href="#ex" id="exmenu"><i className="bi bi-play-btn-fill"></i>&nbsp;ตัวอย่างคลิปวิดีโอ</a>
                                <a className="nav-link" aria-current="page" href="#game" id="gamemenu"><i className="bi bi-controller"></i>&nbsp;บางทีก็มีช่องเกมนะ</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="welcome">
                    <div className="container p-5">
                        <br /><br /><br /><br /><br />
                        <div className="glow">
                            <h1 className="text-white big1">พร้อมที่จะได้รับ</h1>
                            <h1 className="primarytheme bigprime">สิทธิประโยชน์จาก <br />Airwavy!! ยัง?</h1>
                            <br />
                            <h5 className="text-white noglow highlight hi1">คุณสามารถสมัคร Supwavy! ที่ราคา 35฿ ต่อเดือน!</h5>
                        </div>
                        <br />
                        <a href="https://www.youtube.com/c/AirwavyIT/join" target="blank"><button
                            className="btn btn-primary joinbtn">Join!</button></a>
                        <p className="subscript">THIS LINK IS DIRECT TO www.youtube.com/c/AirwavyIT/join</p>
                        <br /><br /><br /><br />
                    </div>
                </div>
                <div className="postview">
                    <div className="container">
                        <br /><br />
                        <h2 className="text-white">มีโพสต์ต่างๆ เกี่ยวกับสาระ IT มากมาย</h2>
                        <hr />
                        <div className="row">
                            <div className="col-sm-6">
                                <img id="timeb1" src={Pic1}
                                    className="postimg shadow animate__animated animate__fadeOutDown" alt="post number 1" />
                            </div>
                            <div className="brwow"><br /></div>
                            <div className="col-sm-6">
                                <img id="timeb2" src={Pic2}
                                    className="postimg shadow animate__animated animate__fadeOutDown" alt="post number 2" />
                            </div>
                        </div>
                        <br /><br />



                    </div>

                    <div id="spybox"></div>
                    <div className="container stickyboxsub">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="boxsub p-4 shadow animate__animated" id="boxsub">

                                    {/* <script src="https://apis.google.com/js/platform.js"></script>

                                                    <div className="g-ytsubscribe" data-channelid="UCvBnJwjxKxJ4c4mOpzyX3Zg" data-layout="full"
                                                        data-count="default"></div> */}

                                    <YouTubeSubscribe
                                        channelid={"UCvBnJwjxKxJ4c4mOpzyX3Zg"}
                                        theme={"default"}
                                        layout={"full"}
                                        count={"default"}
                                    />

                                </div>
                            </div>
                            <div className="col-md-4 wowdes inhider">
                                <h3 className="text-white">กดติดตามเพื่อได้รับเทคนิค IT ต่างๆ มากมายที่เราจะมีให้!
                                    และกดกระดิ่งเพื่อได้รับการแจ้งเตือนอย่างไม่ขาดสายด้วยเด้อ!!</h3>
                            </div>
                            <div className="col-md-4">
                                {/* <!-- Empty --> */}
                            </div>
                        </div>
                    </div>

                    <br /><br />
                </div>
                <br />
                {/* <!-- About Zone --> */}
                <div className="about" id="about">
                    <div className="container">
                        <br /><br /><br /><br />
                        <h2 className="text-white animate__animated"><i className="bi bi-info-circle"></i>&nbsp;เนื้อหาเกี่ยวกับและประวัติ</h2>
                        <hr />
                        <div className="contentIn">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img className="aboutimg" src="/img/about1.png" alt="ภาพประกอบตอนคลิปเก่าๆ " />
                                </div>
                                <div className="col-sm-8">
                                    <p className="text-white righticon para animate__animated animate__fadeOut" id="para1">{ /*<%- include('aboutdoc') %>*/}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
                {/* <%- include('transitionex') %>
        <!-- Example Zone --> */}
                <div className="ex" id="ex">
                    <div className="container">
                        <br /><br />
                        <h2 className="noglow"><i className="bi bi-play-circle"></i>&nbsp;ตัวอย่างคลิปวิดีโอ</h2>
                        <hr />
                        {/* <%- include('exvdo') %> */}
                        <br /><br />
                    </div>
                </div>
                {/* <!-- Game Zone --> */}
                <div className="gameback" id="game">
                    <div className="container">
                        <br /><br />
                        <h2 className=""><i className="bi bi-controller"></i>&nbsp;ช่องเกมของ Airwavy!!</h2>
                        <hr />
                        <div className="row">
                            <div className="col-sm-4">
                                <img src="/img/gamelogoxd.png" className="logogame" alt="logo" />
                            </div>
                            <div className="col-sm-8">
                                <p className="para">Game with Airwavy<sup>นานๆ ลงที</sup> ถือเป็นช่องที่แยกออกมาหลังจากการเปลี่ยน Content จากช่อง Airwavy!! หลัก
                                    ซึ่งบางทีก็ทำการ Stream เกมหรือ Cast เกมบ้างแต่อาจจะลงคลิปไม่บ่อยมากหนัก<br /><br />

                                    เกมจะเป็นเกม Minecraft และ Roblox ซะส่วนใหญ่
                                    <div className=" p-4 shadow animate__animated">
                                        <script src="https://apis.google.com/js/platform.js"></script>

                                        <div className="g-ytsubscribe" data-channelid="UCKNbCnuL6Ew9e-dTJAYyncw" data-layout="full" data-count="default"></div>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className="row" id="rowvdo2">
                            <div className="col-sm-6"><iframe className="youtubevdo" src="https://www.youtube.com/embed/5miJ8HGHjvA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            <div className="col-sm-6"><iframe className="youtubevdo" src="https://www.youtube.com/embed/1RGT3I3eJPE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        </div>
                        <br /><br />
                    </div>
                </div>

                {/* <%- include('footer') %> */}
            </div>
        );
    }
}

function JS() {
    <JS />
}

export default Home