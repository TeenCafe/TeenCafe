import React, {useState, useRef} from 'react';
import "./main.css"
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


const event = () => {

    const Push = () => {
        set(ref(db, "posts" ), {
            imageURL: "https://www.wintercarnival.com/wp-content/uploads/2020/10/Asset-1@2x-50.jpg",
            date: "July 16, 2022",
            message: "They're using our own satellites against us. And the clock is ticking. I gave it a cold? I gave it a virus. A computer virus. Yes, Yes, without the oops! Do you have any idea how long it takes those cups to decompose. Must go faster. Eventually, you do plan to have dinosaurs on your dinosaur tour, right?"
        })
    }


    return (
        <div className="contain">
            <div className="background">
                <h1 className="head">Events</h1>
            </div>
            <div className="background">
                <h2 className="head">Nothing as of yet</h2>
            </div>
        </div>
    )
}
export default event;

