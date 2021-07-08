import React, { useEffect, useState } from 'react'

import YouTubeSubscribe from './downloads/YouTubeSub'
import $ from 'jquery'
import axios from 'axios'

// Include Img Zone
import GameLogo from './img/gamewalogo.png'
import Pic1 from './img/post1.jpg'
import Pic2 from './img/post2.jpg'

// Include JSX Zone
import ExVideo from './ExVideo'

const Home = () => {
    const [subCount, setSubCount] = useState(0)
    const [totalSub, setTotalSub] = useState(0)

    useEffect(() => {
        const ytKey = 'AIzaSyDDKZgyIQHgifSece0uTUd3N5RtUJTsgMc'

        const ytUser = 'UCvBnJwjxKxJ4c4mOpzyX3Zg'

        let getSubscriber = async() => {
            setTotalSub("loading...")
            setSubCount("loading...")
            await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ytUser}&key=${ytKey}`)
            .then(res => {
                // console.log(res.data["items"][0].statistics.subscriberCount)
                setTotalSub(res.data["items"][0].statistics.subscriberCount)
            })
        }

        getSubscriber()
        
    }, [])

    useEffect(() => {
        if (totalSub >= 2000) setSubCount(2000)
        else if (totalSub >= 3000) setSubCount(3000)
        else if (totalSub >= 5000) setSubCount(5000)
        else if (totalSub >= 10000) setSubCount("10K")
        else if (totalSub >= 60000) setSubCount("60K")
        else if (totalSub >= 100000) setSubCount("100K")
        else if (totalSub >= 700000) setSubCount("700K")
        else if (totalSub >= 1000000) setSubCount("1M")
        else if (totalSub >= 10000000) setSubCount("10M")
    }, [totalSub])

    $(document).on('scroll', () => {
        if ($("#spy").offset().top >= $("#boxsub").position().top) { //On BoxSub
            $(".stickyboxsub").addClass("fixed-top")

            $(".airwavyzone").removeClass("hider")
            $(".airwavyzone").addClass("animate__fadeIn")
            $(".wowdes").css("display", "none")
            $(".airwavyzone").removeClass("animate__fadeOut")

            // Action...
            $("#para1").removeClass("animate__fadeOut")
            $("#para1").addClass("animate__fadeInDown")

        }
        if ($("#spy").offset().top <= $("#spybox").position().top) {
            $(".airwavyzone").removeClass("animate__fadeIn")
            $(".airwavyzone").addClass("animate__fadeOut")

            $(".airwavyzone").addClass("hider")
            $(".wowdes").css("display", "block")
            // $(".airwavyzone").css("top", "-100px")
            $(".stickyboxsub").removeClass("fixed-top")
            $(".stickyboxsub").removeClass("fixedcus")
            // $(".boxsub").css("margin-left", "0px")
            // $(".boxsub").css("margin-left", $(".boxsub").position().left + "px")
        }


        if ($("#spy").offset().top >= $("#about").position().top && $("#spy").offset().top < $("#ex").position().top) {
            // Activing Menu...
            $("#exmenu").removeClass("active")
            $("#gamemenu").removeClass("active")

            $("#aboutmenu").addClass("active")


        }
        else if ($("#spy").offset().top >= $("#ex").position().top && $("#spy").offset().top < $("#game").position().top) {
            $("#aboutmenu").removeClass("active")
            $("#gamemenu").removeClass("active")

            $("#exmenu").addClass("active")
        }
        else if ($("#spy").offset().top >= $("#game").position().top) {
            $("#aboutmenu").removeClass("active")
            $("#exmenu").removeClass("active")

            $("#gamemenu").addClass("active")
        }




        if ($("#spy").offset().top >= $("#hereshow").position().top) {
            $(".airwavyzone").css("top", "-100px")
            // $(".airwavyzone").css("display","none")
            $(".boxsub").addClass("animate__bounceOut")
        } else {
            $(".airwavyzone").css("top", "0px")
            // $(".airwavyzone").css("display","block")
            $(".boxsub").removeClass("animate__bounceOut")
            $(".boxsub").addClass("animate__bounceIn")
        }
    })
        return (
            <div>
                {/* <!-- This is NavBar!! --> */}
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

                {/* Welcome Message (this is sale ขายของ) */}
                <div className="welcome">
                    <div className="container p-5">
                        <br /><br /><br /><br /><br />
                        <div className="glow">
                            <div className="cardwow"><h1 className="twocongrat"><i class="bi bi-award"></i> {subCount} SUB PASSED</h1></div>
                            <h1 className="text-white big1">ขอบคุณทุกคน! 🙏🏻</h1>
                            <h1 className="primarytheme bigprime">สำหรับ {totalSub} <br />SUBSCRIBER</h1>
                            <br />
                            <h5 className="text-white noglow highlight hi1">กดติดตามเพื่อไม่พลาดเทคนิคดีๆ จาก Airwavy!!</h5>
                        </div>
                        <br />
                        <a className="btn btn-primary joinbtn" href="https://www.youtube.com/c/AirwavyIT?sub_confirmation=1" target="blank">Subscribe</a>
                        <br />
                        <a href="/eiei" className="subscript">THIS LINK IS DIRECT TO www.youtube.com/c/AirwavyIT?sub_confirmation=1</a>
                        <br /><br /><br /><br />
                    </div>
                </div>

                {/* Post Viewer */}
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
                    {/* Spy (Position Checker) of Subscribe Box */}
                    <div id="spybox"></div>
                    <div className="container stickyboxsub">
                        <div className="row">
                            <div className="col-md-4">
                                {/* Subscribe box */}
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
                            {/* Subscribe Message */}
                            <div className="col-md-4 wowdes inhider">
                                <h3 className="text-white">กดติดตามเพื่อได้รับเทคนิค IT ต่างๆ มากมายที่เราจะมีให้!
                                    และกดกระดิ่งเพื่อได้รับการแจ้งเตือนอย่างไม่ขาดสายด้วยเด้อ!!</h3>
                            </div>
                            {/* ที่ว่าง */}
                            <div className="col-md-4 wowdes inhider">

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
                {/* Transition Effect หล่อเท่ */}
                <div className="transitionex"></div>
                <div className="ex" id="ex">
                    <div className="container">
                        <br /><br />
                        <h2 className="noglow"><i className="bi bi-play-circle"></i>&nbsp;ตัวอย่างคลิปวิดีโอ</h2>
                        <hr />
                        {/* include EXVIDEO.js */}
                        <ExVideo />
                        <br /><br />
                    </div>
                </div>

                {/* Transition Effect หล่อเท่ 2 */}
                <div className="transitionex2"></div>
                {/* <!-- Game Zone --> */}
                <div className="game" id="game">
                    <div className="container gamezone">
                        <br /><br />
                        <h2 className=""><i className="bi bi-controller"></i>&nbsp;ช่องเกมของ Airwavy!!</h2>
                        <hr />
                        <div className="row">
                            <div className="col-sm-4">
                                <img src={GameLogo} className="logogame" alt="logo" />
                            </div>
                            <div className="col-sm-8">
                                <p className="para">Game wA<sup>(นานๆ ลงที)</sup> ถือเป็นช่องที่แยกออกมาหลังจากการเปลี่ยน Content จากช่อง Airwavy!! หลัก
                                    ซึ่งบางทีก็ทำการ Stream เกมหรือ Cast เกมบ้างแต่อาจจะลงคลิปไม่บ่อยมากหนัก<br /><br />

                                    เกมจะเป็นเกม Minecraft และ Roblox ซะส่วนใหญ่

                                </p>
                                <div className=" p-4 card shadow subgamewa animate__animated">
                                    <script src="https://apis.google.com/js/platform.js"></script>

                                    <div className="g-ytsubscribe" data-channelid="UCKNbCnuL6Ew9e-dTJAYyncw" data-layout="full" data-count="default"></div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <br />
                        <div className="row" id="rowvdo2">
                            <div className="col-sm-6"><iframe className="youtubevdo" src="https://www.youtube.com/embed/5miJ8HGHjvA?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                            <div className="col-sm-6"><iframe className="youtubevdo" src="https://www.youtube.com/embed/1RGT3I3eJPE?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        </div>
                        <br /><br />
                    </div>
                </div>

                {/* <%- include('footer') %> */}
            </div>
        );
    }

export default Home