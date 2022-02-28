import React from 'react';
import { useState } from 'react';
import '../styleforexample1/GQRCode.styles.css';

const GQRCode = ()=>{

    const [qrimage,setQrImage] = useState('./logo192.png')

    const BaseUrl = `https://api.qrserver.com/v1/create-qr-code/`

    const handleChange = (e)=>{
        let ChangeBase = `${BaseUrl}?size=350x350&data=${e.target.value}`
        if(e.target.value == ""){
            ChangeBase = './logo192.png'
        }
        setQrImage(ChangeBase)
    }

    return (
        <div className="pQRBox">
            <h1>Generate QR Code</h1>
            <div className="QRBox">
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="Enter chain you want convert to QR code"
                />
                <div className="qrcodeBx">
                    <img src={qrimage} width="350" height="350" alt="" />
                </div>
            </div>
        </div>
    )

}



export default GQRCode;