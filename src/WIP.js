import React from 'react'
import './App.css'
import WIPLoading from './img/WIPLoading.gif'

export default function WIP() {
    return (
        <div className="mainpageloading">
            <div className="row">
                <div className="col-sm-6">
                    <div className="container">
                        <img className="errorimg1" src={WIPLoading} alt="Work in Progress" />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="container">
                    <br/><br/>
                <h1 className="text-light">หน้านี้กำลังพัฒนาอยู่...</h1>
                <hr className="notEffect"/>
                    <h5 className="text-light">โปรดรอ อาจใช้เวลาหลายวัน...</h5>
                    <br/>
                    <a className="btn btn-outline-light" href="/"><i class="bi bi-arrow-left-circle"></i>  กลับไปยังหน้าแนะนำตัว</a>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
