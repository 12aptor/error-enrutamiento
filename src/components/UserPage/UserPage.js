import React from 'react'
import '../Styles/styles.css'
import Header from '../Header/Header'
import desktopImage from '../Media/calavera.jpg'
import mobileImage from '../Media/calavera.jpg'

export default function index() {

    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

    return (
        <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-md-4" style={{ color: 'white' }}>
                        <p>Login</p>
                        <p>Hola</p>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4" style={{ color: 'white' }}>
                        <p>Hola</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
