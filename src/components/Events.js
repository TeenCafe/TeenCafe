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
            <div className="card4">
                <img
                    src="https://images.squarespace-cdn.com/content/v1/536fe0f6e4b08758c320b79a/1639512806072-RIVUV6RF0MU9SSE797D1/image-asset.jpeg"  alt="event"
                    width = {400}
                    height = {400}
                />
                <h2>July 19, 2022</h2>
                <h5>They're using our own satellites against us. And the clock is ticking. I gave it a cold? I gave it a virus. A computer virus. Yes, Yes, without the oops! Do you have any idea how long it takes those cups to decompose. Must go faster. Eventually, you do plan to have dinosaurs on your dinosaur tour, right?</h5>

            </div>
            <div className="card4">
                <img
                    src="https://images.squarespace-cdn.com/content/v1/536fe0f6e4b08758c320b79a/1639512806072-RIVUV6RF0MU9SSE797D1/image-asset.jpeg"  alt="event"
                    width = {400}
                    height = {400}
                />
                <h2>July 19, 2022</h2>
                <h5>They're using our own satellites against us. And the clock is ticking. I gave it a cold? I gave it a virus. A computer virus. Yes, Yes, without the oops! Do you have any idea how long it takes those cups to decompose. Must go faster. Eventually, you do plan to have dinosaurs on your dinosaur tour, right?</h5>

            </div>
            <div className="card7">
                <img
                    src="https://images.squarespace-cdn.com/content/v1/536fe0f6e4b08758c320b79a/1639512806072-RIVUV6RF0MU9SSE797D1/image-asset.jpeg"  alt="event"
                    width = {400}
                    height = {400}
                />
                <h2>July 19, 2022</h2>
                <h5>They're using our own satellites against us. And the clock is ticking. I gave it a cold? I gave it a virus. A computer virus. Yes, Yes, without the oops! Do you have any idea how long it takes those cups to decompose. Must go faster. Eventually, you do plan to have dinosaurs on your dinosaur tour, right?</h5>

            </div>
            <div className="card7">
                <img
                    src="https://images.squarespace-cdn.com/content/v1/536fe0f6e4b08758c320b79a/1639512806072-RIVUV6RF0MU9SSE797D1/image-asset.jpeg"  alt="event"
                    width = {400}
                    height = {400}
                />
                <h2>July 19, 2022</h2>
                <h5>They're using our own satellites against us. And the clock is ticking. I gave it a cold? I gave it a virus. A computer virus. Yes, Yes, without the oops! Do you have any idea how long it takes those cups to decompose. Must go faster. Eventually, you do plan to have dinosaurs on your dinosaur tour, right?</h5>

            </div>
            <button style={{width: "300px"}} onClick={Push}>Helloooooo</button>
        </div>
    )
}
export default About;

