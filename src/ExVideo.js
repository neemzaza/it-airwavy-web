import React from 'react'
import './App.css'

export default function ExVideo() {

    // const apiKey = 'AIzaSyAnXleE8pJA096byFK-lCLyNOd4zynHqvQ'
    // const channelID = 'UCvBnJwjxKxJ4c4mOpzyX3Zg'
    // const maxResult = 10

    return (
        <div>
            <br />
            <div className="row">
                <h1 className="text-white"><li className="text-decoration-underline"><i class="bi bi-hdd-stack-fill"></i>   Minecraft (เรื่องทางเทคนิค)</li></h1>
                <div className="col-sm-6">
                    <iframe className="youtubevdo" src="https://www.youtube.com/embed/_6aXmNisApQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-sm-6">
                    <iframe className="youtubevdo" src="https://www.youtube.com/embed/qkhrJPPz6Vw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <hr /> {/* LINE */}

            <div className="row">
                <h1 className="text-white"><li className="text-decoration-underline"><i class="bi bi-image-alt"></i>   Photoshop (ตัดต่อภาพ / แต่งภาพ)</li></h1>
                <div className="col-sm-6">
                    <iframe className="youtubevdo" src="https://www.youtube.com/embed/9ITaoXTWsxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className="youtubevdo" src="https://www.youtube.com/embed/1nmyICn4c8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-sm-6">
                    <iframe className="youtubevdo" src="https://www.youtube.com/embed/mrEkbPeIjyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className="youtubevdo" src="https://www.youtube.com/embed/p8kvSw3pMNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <hr /> {/* LINE */}

            <div className="other-video">
                <a className="btn btn-outline-light" href="https://www.youtube.com/c/AirwavyIT/videos" target="blank"><i class="bi bi-play-btn"></i>  วิดีโอเพิ่มเติม...</a>
            </div>
        </div>
    )
}
