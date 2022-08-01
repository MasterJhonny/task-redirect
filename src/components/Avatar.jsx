import React from 'react'

// const urlImg = 'https://i.postimg.cc/gjc5Cfh3/foto.jpg'

function Avatar({ urlImg }) {
    return (  
        <div className="img-div">
            <div className="img-container">
                <img src={urlImg} alt="foto user" className="img" />
            </div>
        </div>
    );
}

export {Avatar};