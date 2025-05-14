import React, {useState, useRef} from 'react';
import {Form, Button, Alert} from "react-bootstrap";
import db from '../firebase';
import { getDatabase, ref, set } from "firebase/database";
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBeer } from 'react-icons/fa';
import { HiDesktopComputer, HiMusicNote } from 'react-icons/hi';
import { BsFillPeopleFill, BsCupStraw } from 'react-icons/bs';
import { FaMusic, FaCouch } from 'react-icons/fa';
import { IoIosMusicalNotes } from 'react-icons/io';
import { GiChessPawn } from 'react-icons/gi';
import { AiOutlineTrophy } from 'react-icons/ai';
import { FaXbox } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';

const About = () => {




    return (

        <div className="contain">
            <div className="offer">
                <h1 className="head">Potato</h1>
            </div>
            <div className="info">
                <h4 className="desc">
                The Teen Cafe is just one of the programs run by the Calgary Tsung Tsin Benevolent Association, a charity founded on the basis of connecting cultures around the city. Subsequently, membership to the Calgary Teen Cafe also includes membership to all other programs run by the Calgary Tsuin Tsin Benevolent Association. This program, also called the youth connection program, is completely youth-ran. From volunteering to leadership, the Cafe provides opportunities for youth to make an impact improving diversity in the next generation.
                </h4>
            </div>
            <div className="offer">
                <h1 className="head">Our Mission</h1>
            </div>
            <div className="info">
                <h4 className="desc">
                Calgary Teen Cafe program was founded on the basis of providing unbiased opportunity to everyone, regardless of their background. We firmly believe that this can be accomplished through modern technology. Through the endless opportunities and experiences it creates, technology allows users to bond through shared experiences in a low-pressure environment. Unfortunately, not everyone has access to this luxury. Thus, the Cafe’s mission is to provide a public space for all youth to easily network with others.
</h4>
            </div>
            <svg width="0" height="0">
                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#a430f4" offset="0%" />
                    <stop stopColor="#0cabf5" offset="100%" />
                </linearGradient>
            </svg>
            <div className="offer">
                <h1 className="head">What Do We Offer?</h1>
            </div>
            <div className="card56">
                <HiDesktopComputer style={{ fill: "url(#blue-gradient)" }} size={300}/>
                <h1 className="icondesc">Gaming PC's</h1>

            </div>

            <div className="card56">
                <BsFillPeopleFill style={{ fill: "url(#blue-gradient)" }} size={300}/>
                <h1 className="icondesc">Socialization
                </h1>
            </div>
            <div className="card56">
                <IoIosMusicalNotes style={{ fill: "url(#blue-gradient)" }} size={300}/>
                <h1 className="icondesc">Music Booth
                </h1>
            </div>
            <div className="card56">

                <GiChessPawn style={{ fill: "url(#blue-gradient)" }} size={300}/>
                <h1 className="icondesc">Board Games
                </h1>
            </div>
            <div className="card56">
                <FaXbox style={{ fill: "url(#blue-gradient)" }} size={300}/>
                <h1 className="icondesc">Xbox
                </h1>
            </div>
            <div className="card56">
                <SiNintendoswitch style={{ fill: "url(#blue-gradient)" }} size={300}/>
                <h1 className="icondesc">Nintendo Switch
                </h1>
            </div>
            <div className="card56">
                <AiOutlineTrophy style={{ fill: "url(#blue-gradient)" }} size={300}/>
                <h1 className="icondesc">Tournaments
                </h1>
            </div>



        </div>



    )
}
export default About;

