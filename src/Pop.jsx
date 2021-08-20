import React, {useState, useEffect} from 'react'
import axios from 'axios'
import $ from 'jquery';
import defaultEmpop from './img/3emdis.png'
import Empop from './img/3empop.png'

export default function Pop() {
    const getCookie = () => {
        let HelloWorld = document.cookie.split('clickTime=');
        let getNum = HelloWorld[1]
        // let HelloWorld1 = HelloWorld.
        return getNum
    }
    
    const [clickTime, addClickTime] = useState(!document.cookie ? 0 : parseInt(getCookie()));

    // console.log(clickTime)

    const click = () => {
        addClickTime(parseInt(clickTime + 1));
        document.cookie = "clickTime=" + clickTime;
        $("#pluem").css({
            "background": `url('${Empop}')`,
            "background-size": "45rem",
            "background-position": "center center",
            "background-repeat": "no-repeat",
            "width": "100vw",
            "height": "100vh",
        })

        axios.post('http://localhost:5000/pop', { clickTime: clickTime, team: "Airwavy" }, (res) => {

        })

        // getCookie()

    }

    const notClick = () => {
        $("#pluem").css({
            "background": `url('${defaultEmpop}')`,
            "background-size": "45rem",
            "background-position": "center center",
            "background-repeat": "no-repeat",
            "width": "100vw",
            "height": "100vh",
        })
    }
    return (
        <div className="">
            <div className="pluem" id="pluem" tabIndex="0" onKeyDown={() => click()} onKeyUp={() => notClick()} onMouseDown={() => click()} onMouseUp={() => notClick()}>
                <center>
                    <br/><br/><br/><br/>
                    <h1 className="text-white bigprime">PopPluem</h1>
                    <h1 className="text-white">{clickTime}</h1>
                </center>
            </div>
        </div>
    )
}
