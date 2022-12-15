import React, {useState, useRef} from 'react';
import "./Events.css"
import {HiDesktopComputer} from "react-icons/hi";
import {BsCupStraw, BsFillPeopleFill} from "react-icons/bs";
import {IoIosMusicalNotes} from "react-icons/io";
import {GiChessPawn} from "react-icons/gi";
import {AiOutlineTrophy} from "react-icons/ai";
import {db} from "../firebase"
import { getDatabase, ref, set } from "firebase/database";
import data from "bootstrap/js/src/dom/data";
import image from '../assets/rocket_launch1.jpg';
import itinerary from '../assets/itinerary.png';


const About = () => {

    const Push = () => {
        set(ref(db, "posts" ), {
            imageURL: "https://www.wintercarnival.com/wp-content/uploads/2020/10/Asset-1@2x-50.jpg",
            date: "July 16, 2022",
            message: "They're using our own satellites against us. And the clock is ticking. I gave it a cold? I gave it a virus. A computer virus. Yes, Yes, without the oops! Do you have any idea how long it takes those cups to decompose. Must go faster. Eventually, you do plan to have dinosaurs on your dinosaur tour, right?"
        })
    }


    return (
        <div className="contain">
            <div className="offer">
                <h1 className="head">Events</h1>
            </div>
            <div className="card5">
                <div className = "imgOverlay">
                    <img
                    src= {image}  alt="event"
                    className = "bigImg"/>
                    <div className="centered">LAUNCH DAY</div>
                </div>
                <h2>December 17, 2022</h2>
                <h5>
The Calgary Teen Cafe is finally opening! Come try out our games and hang out with your friends on December the 17th from 12 to 8 PM. <br/><br/>

This event is completely free and everyone is welcome to come and play! Memberships are not required.<br/><br/>

This event is drop-in meaning you can come and go as you please! <br/><br/>

If you have any other questions, feel free to email us at calgaryteencafe@gmail.com </h5>
                <img className='card5'src= {itinerary}></img>
            </div>
        </div>
    )
}
export default About;

