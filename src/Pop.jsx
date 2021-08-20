import React, {useState, useEffect} from 'react'
import axios from 'axios'
import $ from 'jquery';
import defaultEmpop from './img/3emdis.png'
import Empop from './img/3empop.png'

import useSound from 'use-sound'
import playPop from './sound/pop.m4a'

export default function Pop() {
    $("body").css("overflow", "hidden")
    const [playEffect] = useSound(playPop)
    const getCookie = () => {
        let HelloWorld = document.cookie.split('clickTime=');
        let getNum = HelloWorld[1]
        // let HelloWorld1 = HelloWorld.
        return getNum
    }
    
    const [clickTime, addClickTime] = useState(!document.cookie ? 0 : parseInt(getCookie()));
    const [totalClick, setTotalClick] = useState(0)

    // console.log(clickTime)

    const click = () => {
        addClickTime(parseInt(clickTime + 1));
        document.cookie = "clickTime=" + (clickTime + 1);
        $("#pluem").css({
            "background": `url('${Empop}')`,
            "background-size": "30rem",
            "background-position": "center center",
            "background-repeat": "no-repeat",
            "width": "100vw",
            "height": "100vh",
        })
        playEffect()

        axios.post('https://it-airwavy-server-1.herokuapp.com/pop', { clickTime: 1, team: "Airwavy" }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

        // getCookie()

    }

    const notClick = () => {
        $("#pluem").css({
            "background": `url('${defaultEmpop}')`,
            "background-size": "30rem",
            "background-position": "center center",
            "background-repeat": "no-repeat",
            "width": "100vw",
            "height": "100vh",
        })
    }

    useEffect(() => {
        axios.get('https://it-airwavy-server-1.herokuapp.com/').then(res => {
            setTotalClick(res.data)
        })
    }, [])

    setTimeout(() => {
        axios.get('https://it-airwavy-server-1.herokuapp.com/').then(res => {
            setTotalClick(res.data)
        })
    }, 15000);  
    return (
        <div className="mainPage popPluem" tabIndex="0" onKeyDown={() => click()} onKeyUp={() => notClick()}>
            <div className="pluem" id="pluem" tabIndex="0" onTouchStart={() => click()} onMouseDown={() => click()} onMouseUp={() => notClick()}>
                <center>
                    <br/><br/><center><p className="text-white">การคลิ๊กของคนทั้งหมด : {totalClick} (ค่าจะอัปเดตทุกๆ 15 วินาที)</p></center><br/>
                    <h1 className="text-white bigprime stroketext">PopPluem</h1>
                    <h1 className="text-white">{clickTime}</h1>
                </center>
            </div>
        </div>
    )
}
