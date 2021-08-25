import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import defaultEmpop from "./img/3emdis.png";
import Empop from "./img/3empop.png";

import useSound from "use-sound";
import playPop from "./sound/pop.m4a";

export default function Pop() {
  $("body").css("overflow", "hidden");
  const [playEffect] = useSound(playPop);
  const getCookie = () => {
    let HelloWorld = document.cookie.split("clickTime=");
    let getNum = HelloWorld[1];
    // let HelloWorld1 = HelloWorld.
    return getNum;
  };

  const [clickTime, addClickTime] = useState(
    !document.cookie ? 0 : parseInt(getCookie())
  );
  const [totalClick, setTotalClick] = useState(0);

  // console.log(clickTime)

  const click = () => {
    addClickTime(parseInt(clickTime + 1));
    document.cookie = "clickTime=" + (clickTime + 1);
    $("#pluem").css({
      background: `url('${Empop}')`,
      "background-size": "30rem",
      "background-position": "center center",
      "background-repeat": "no-repeat",
      width: "100vw",
      height: "100vh",
    });
    $("#myScore").addClass("animate__jello");
    $("#myScore").css("font-size", "4rem");
    playEffect();

    axios
      .post("https://it-airwavy-server-1.herokuapp.com/pop", {
        clickTime: 1,
        team: "Airwavy",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // getCookie()
  };

  const notClick = () => {
    setTimeout(() => {
      $("#myScore").removeClass("animate__jello");
      $("#myScore").css("font-size", "3rem");
    }, 200);
    $("#pluem").css({
      background: `url('${defaultEmpop}')`,
      "background-size": "30rem",
      "background-position": "center center",
      "background-repeat": "no-repeat",
      width: "100vw",
      height: "100vh",
    });
  };

  const toggleSidebar = () => {
    $("#sidebar").toggleClass("on-zoom");
  };

  // useEffect(() => {
  //     axios.get('https://it-airwavy-server-1.herokuapp.com/').then(res => {
  //         setTotalClick(res.data.score)
  //         console.log(res)
  //     })
  // }, [])

  // setTimeout(() => {
  //     axios.get('https://it-airwavy-server-1.herokuapp.com/').then(res => {
  //         setTotalClick(res.data.score)
  //     })
  // }, 15000);

  useEffect(() => {
    axios.get("https://it-airwavy-server-1.herokuapp.com/").then((res) => {
      setTotalClick(res.data[0].clicked)

      console.log(totalClick)
    });
  }, []);
  
  setTimeout(() => {
    axios.get("https://it-airwavy-server-1.herokuapp.com/").then((res) => {
      setTotalClick(res.data[0].clicked); // 0 + 0 + 1 + 1 + 1 + 1 + 0 + 1 + 0 + 0 => 5
    });

    $("#score").addClass("animate__flash");
    $("#score").css("color", "aqua");

    setTimeout(() => {
      $("#score").removeClass("animate__flash");

      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
      ) {
        $("#score").css("color", "#000");
      } else {
        $("#score").css("color", "#fff");
      }
    }, 1000);
  }, 15000);
  return (
    <div className="mainPage popPluem">
      <div
        className="sidebar pt-3"
        id="sidebar"
        onClick={() => toggleSidebar()}
      >
        <div className="container">
          <a class="btn btn-light btn-sm " href="#" role="button">
            {">"}
          </a>
          <div className="flex">
            <h3 className="title">ลำดับ 🏆</h3>
          </div>
          <div className="totalScore">
              <div className="flex">
                <p className="all-score">ทั้งหมด :</p>&nbsp;&nbsp;
                <p id="score" className="animate__animated">
                  {totalClick}
                </p>
              </div>
            </div>

            
        </div>

        <div className="bottomMsg">
          <p>Leaderboard แบบเต็ม Comming soon...</p>
        </div>
      </div>
      <div
        className="pluem"
        id="pluem"
        tabIndex="0"
        onKeyDown={() => click()}
        onKeyUp={() => notClick()}
        onTouchStart={() => click()}
        onMouseDown={() => click()}
        onMouseUp={() => notClick()}
      >
        <center>
          <br />
          <br />
          <center>
            <p className="text-white">
              การคลิ๊กของคนทั้งหมด : {} (ค่าจะอัปเดตทุกๆ 15 วินาที)
            </p>
          </center>
          <br />
          <h1 className="bigprime stroketext">PopPluem</h1>
          <h1 id="myScore" className="stroketext animate__animated">
            {clickTime}
          </h1>
        </center>
      </div>
    </div>
  );
}
