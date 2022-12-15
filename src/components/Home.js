import React, {Component, useState} from 'react';
import Carousel from "../BootstrapCarousel"
import "./Home.css"
const Home = () => {
    return (
<div >
            <div className="caro">
                <Carousel/>
            </div>
            <div className = "back">
                <h1 className="header">Experience the thrill of victory</h1>
                <h4>The Calgary Teen Cafe is Calgary's number-one spot for all of your gaming and social needs!<br/><br/>

With fully equipped PCs, consoles, and an extensive gaming library, the Calgary Teen Cafe is your place to play and hangout for comfort, performance, and experience.

We are fully equipped to suit all types of gamers. Whether you are here to make friends or win competitions,  our friendly environment and high-performance systems guarantee you will get the best out of your gaming experience!</h4>
                <a href='#/signup'><button className="button-18" >Sign Up!</button></a>
            </div>
        </div>
    )
}
export default Home;
