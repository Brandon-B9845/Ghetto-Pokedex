import React from 'react';

function NavBar(props) {


    return (
        <div>
            <header className="main-header">
                <img className="header-img" src={process.env.PUBLIC_URL + 'turkey.jpeg.png'} alt="a turkey" />
                <h2 className="header-title">Turkish Movie Central</h2>
                <ul className="nav">
                    <li><a href="temporary">Home</a></li>
                    <li><a href="temporary">Random Movie!</a></li>
                    <li><a href="https://www.facebook.com/">About Us</a></li>
                </ul>
            </header>
        </div>
    );
}

export default NavBar;