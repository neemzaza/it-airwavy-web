import React, { useState, useEffect } from "react";
import DevLogo from "./img/airwavydevnew.png";
import $ from "jquery";
import marked from "marked"
import axios from "axios"

import installDoc from './article/installation.md'
import documentionDoc from './article/documention.md'
import issueDoc from './article/issue.md'

export default function Dev() {
    const getArticles = (article, yourstate) => {
        axios.get(article)
        .then(res => {
            console.log(res.data)
            yourstate(marked(res.data))
        })
        // fetch(article)
        // .then(res => {
        //     console.log(res.text())
        // })
        // .then(text => {
        //     setInstallDocument(text)
        // })
    }
    const [installDocument, setInstallDocument] = useState()
    const [documention, setDocumention] = useState()
    const [issueDocument, setIssueDocument] = useState()
    const onGoToWelcome = () => {
        for (let i = 2; i <= 5; i++) {
            $(`#item${i}`).removeClass("active")
            $("#item1").removeClass(`content${i}`)
        }

        $("#item1").addClass("active")
        $("#item1").addClass("content1")
    }
    
    const onGoToLearnMore = () => {
        $("#title-project").addClass("activate")
        for (let i = 1; i <= 5; i++) {
            if (i === 2) {
                continue
            }
            $(`#item${i}`).removeClass("active")
            $("#item2").removeClass(`content${i}`)
        }

        $("#item2").addClass("active")
        $("#item2").addClass("content2")
    }

    const onGoToTuWavyZone = () => {
        for (let i = 1; i <= 5; i++) {
            if (i === 3) {
                continue
            }
            $(`#item${i}`).removeClass("active")
            $("#item3").removeClass(`content${i}`)
        }

        $("#item3").addClass("active")
        $("#item3").addClass("content3")
    }

    const onGoToFooter = () => {
        for (let i = 1; i <= 5; i++) {
            if (i === 4) {
                continue
            }
            $(`#item${i}`).removeClass("active")
            $("#item4").removeClass(`content${i}`)
        }

        $("#item4").addClass("active")
        $("#item4").addClass("content4")
    }

  useEffect(() => {
    getArticles("https://raw.githubusercontent.com/neemzaza/AirwavyWeb/main/วิธีการติดตั้ง-plugin-tuwavyspeedrunner.md", setInstallDocument)
    getArticles("https://raw.githubusercontent.com/neemzaza/AirwavyWeb/main/คู่มือการใช้-plugin-tuwavyspeedrunner.md", setDocumention)
    getArticles("https://raw.githubusercontent.com/neemzaza/AirwavyWeb/main/ปัญหาของ-plugin-tuwavyspeedrunner.md", setIssueDocument)
    if ($("#spy").offset().top <= $("#learn-more").offset().top) {
        onGoToWelcome()
    } 
    if ($("#spy").offset().top >= $("#learn-more").offset().top) {
        onGoToLearnMore()
    }
    if ($("#spy").offset().top >= $("#tuwavyzone").offset().top) {
        onGoToTuWavyZone()
    }

    $("body").css("overflow", "hidden");
  }, []);
  return (
    <div className="devfont devpage">
        {/* Welcome */}
        <nav id="spy"></nav>
        <nav className="progress-nav-scroll">
            <h5 className="title">INDEX</h5>
            <a className="line-progress ishover1" href="#" id="item1" onClick={() => onGoToWelcome()}>
            </a>
            <a className="line-progress ishover2" href="#learn-more" id="item2" onClick={() => onGoToLearnMore()}>
            </a>
            <a className="line-progress ishover3" href="#tuwavyzone" id="item3" onClick={() => onGoToTuWavyZone()}>
            </a>
            <a className="line-progress ishover4" href="#hereshow" id="item4" onClick={() => onGoToFooter()}>
            </a>
        </nav>
      <div className="backdev" id="welcome">
        <div className="welcomedev">
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-sm-8"></div>
            <div className="col-sm-4">
              <div className="container blurdrop">
                <h1 className="jetbrainfont big1">
                  Airwavy Developer
                </h1>
                <hr />
                <img src={DevLogo} alt="imgdev" width="300" />
                <br />
                <br />
                <h5 className="jetbrainfont noglow">
                  Learn more, Explore more and...
                </h5>
              </div>
            </div>
          </div>
          <br />
          <div className="center">
            <a
              className="btn btn-primary btn-sm "
              href="#learn-more"
              role="button"
              onClick={() => onGoToLearnMore()}
            >
              <i className="iconconfig1 bi bi-arrow-down-circle"></i>
            </a>
          </div>
          <br />
        </div>
      </div>

        {/* My Project */}
      <div className="learn-more page" id="learn-more">
        <div className="container pt-5">
          <h1 className="big-title" id="title-project">My project</h1>
          <pre className="line-text">{`console.log("My project") print("My project") System.out.println("My project") put 'My project'`}</pre>
          <div className="grid-card">
            <div className="item1 grid-child">
              <div className="card left p-3">
                <h3>TuWavy project</h3>
                <marquee
                  behavior="scroll"
                  direction="left"
                  className="line-text autoscroll"
                >
                  01010100 01110101 01010111 01100001 01110110 01111001 00100000
                  01110000 01110010 01101111 01101010 01100101 01100011 01110100
                </marquee>
                <pre>
                  <i class="devicon-java-plain colored"></i>&nbsp; This project
                  is Java-based programming language
                </pre>
                <p>
                  TuWavy project เป็น Plugin เกม Minecraft ซึ่งเกี่ยวกับการเล่น
                  Speedrunner เป็น Plugin ช่วยเล่น
                  ที่สะดวกสะบายและมีอะไรน่าเล่นเยอะเลย! เช่น
                  มีระบบนับเวลาเล่นให้สะดวกต่อการจับเวลา
                  ระบบแบบมีเกมโหมดสร้างสรรค์ระหว่างเล่น รวมถึง
                  มีระบบรีแมพเวลาเล่นเสร็จด้วย
                </p>
              </div>
            </div>
            <div className="item2 grid-child">
              <div className="card p-3">
                <h3>BeeBot project</h3>
                <marquee
                  behavior="scroll"
                  direction="right"
                  className="line-text autoscroll"
                >
                  01000010 01100101 01100101 01000010 01101111 01110100 00100000 01110000 01110010 01101111 01101010 01100101 01100011 01110100
                </marquee>
                <pre>
                  <i class="devicon-typescript-plain colored"></i>&nbsp; This
                  project is Typescript-based programming language
                </pre>
                <p>
                  BeeBot project เป็น Bot ใน Discord ซึ่งในห้อง Discord
                  หลักของผม มีหน้าที่แค่ตรวจจับการเข้าออกของ User ในนั้น
                  ส่วนในห้อง Discord ส่วนตัว จะมีการเปิดเพลงได้ด้วย!
                  อาจจะเปิดให้ใช้เร็วๆ นี้!
                </p>
              </div>
            </div>
            <div className="item3 grid-child">
              <div className="card p-3">
                <h3>ChaterMan project</h3>
                <marquee
                  behavior="scroll"
                  direction="right"
                  className="line-text autoscroll"
                >
                  01000011 01101000 01100001 01110100 01100101 01110010 01001101 01100001 01101110 00100000 01110000 01110010 01101111 01101010 01100101 01100011 01110100
                </marquee>
                <pre>
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-nodejs-plain colored"></i>
                <i class="devicon-react-original colored"></i>
                <i class="devicon-mongodb-plain-wordmark colored"></i>
                &nbsp; 
                This project is Javascript-based programming language
                </pre>
                <p>
                  ChaterMan project เป็น Webapp ที่เป็นเว็บ Social Media ที่เกี่ยวกับการโพสต์เรื่องราวต่างๆ การตั้งคำถามและแชท
                  ปัจจุบันยังอยู่ระหว่างพัฒนา
                </p>
              </div>
            </div>
          
          </div>
          <br/>
          <div className="center">
                <a
                className="btn btn-outline-primary btn-sm toggletobelow"
                href="#tuwavyzone"
                role="button"
                onClick={() => onGoToTuWavyZone()}
                >
                <i className="iconconfig1 bi bi-arrow-down-circle"></i><p>Next : TuWavy project</p>
                </a>
          </div>
        </div>
        
      </div>


        {/* TuWavy Section */}
      <div className="tuwavyzone page" id="tuwavyzone">
        <div className="container pt-5">
          <h1 id="title-project">TuWavy project</h1>
          <pre className="line-text">{`console.log("TuWavy project") print("TuWavy project") System.out.println("TuWavy project") put 'TuWavy project'`}</pre>
          <div className="grid-card">
            <div className="item1 grid-child">
              <div className="card p-3">
                <h3><i class="bi bi-archive-fill"></i>  Release - ปล่อยตัว</h3>
                <pre>
                  ตอนนี้ยังไม่ได้ปล่อยสู่สาธารณะ ยังเป็น "Pre-release" เพราะฉะนั้นอาจมีข้อผิดพลาดระหว่างเล่นได้
                </pre>
                <p>
                  คุณสามารถโหลดตัวทดลองก่อนได้ที่ปุ่มด้านล่างนี่เลย! (ย้ำว่ายังเป็น Beta อาจเกิดข้อผิดพลาดด้วย!)
                </p>
                <a class="btn btn-primary" target="blank" href="https://github.com/neemzaza/Airwavy-Speedrunner/releases">Download<br/>(ที่ github)</a>
              </div>
            </div>
            <div className="item2 grid-child installation-zone">
              <div className="card p-3">
                <article dangerouslySetInnerHTML={{__html: installDocument}}></article>
                
              </div>
            </div>
            <div className="item3 grid-child">
              <div className="card p-3">
                <article dangerouslySetInnerHTML={{__html: documention}}></article>
              </div>
            </div>

            <div className="item4 grid-child">
              <div className="card p-3">
                <article dangerouslySetInnerHTML={{__html: issueDocument}}></article>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
