import React, { useEffect } from 'react'
import DevLogo from './img/airwavydevnew.png'
import $ from 'jquery'

export default function Dev() {
    useEffect(() => {
        $("body").css("overflow","hidden")
    }, [])
    return (
        <div className="devfont devpage">
            <div className="backdev">
                <div className="welcomedev">
                    <br /><br /><br />
                    <div className="row">
                        <div className="col-sm-8">

                        </div>
                        <div className="col-sm-4">
                            <div className="container blurdrop">
                                <h1 className="text-white jetbrainfont big1">Airwavy Developer</h1>
                                <hr />
                                <img src={DevLogo} alt="imgdev" width="300" />
                                <br /><br />
                                <h5 className="text-white jetbrainfont noglow">Learn more, Explore more and...</h5>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="center">
                        <a className="btn btn-primary btn-sm " href="#learn-more" role="button"><i className="iconconfig1 bi bi-arrow-down-circle"></i></a>
                    </div>
                    <br />
                </div>
            </div>

            <div className="learn-more" id="learn-more">
                <br /><br /><br /><br /><br />
                <h1 className="text-white">fnen</h1>
            </div>
        </div>
    )
}
