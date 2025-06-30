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
                <h2 className="head">Python 101</h2>
            </div>
            <div className="background" style={{padding: '2em 0'}}>
                <div className="content" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end', // shift columns to the right
                    gap: '2em',
                    flexWrap: 'wrap',
                    minHeight: '370px',
                    padding: '1.5em 2em', // add padding to ensure margin between background and content
                    boxSizing: 'border-box',
                    width: '100%'
                }}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minWidth: 0, flex: 1, marginLeft: "60px"}}>
                        <h3 style={{color: '#0cabf5', marginBottom: '0.8em'}}>Beginner Coding Workshop</h3>
                        <ul style={{color: 'white', fontSize: '1.1em', margin: '0 auto', paddingLeft: '1.2em', textAlign: 'left', display: 'inline-block', lineHeight: '2'}}>
                            <li>Introduction to Python and programming basics</li>
                            <li>Hands-on coding exercises</li>
                            <li>Build your first Python project</li>
                            <li>Learn the wonders of programming!</li>
                            <li>Scroll below to sign up, or click the button below!</li>
                            <li>Questions? Email <a href = "mailto:gaoruiqi09@gmail.com">gaoruiqi09@gmail.com</a></li>
                        </ul>
                        <p style={{color: 'lightgray', marginTop:'10px'}}>No prior experience required</p>
                        <a href="https://forms.gle/FHysZuz8YJUpxpHT6" target="_blank" rel="noopener noreferrer">
                            <button className="button-18" style={{marginTop: '-1em', whiteSpace: 'nowrap'}}>Sign Up</button>
                        </a>
                    </div>
                    <div style={{background: '#181b2a', borderRadius: '12px', padding: '1.5em 2em', color: 'white', minWidth: '220px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7em', height: '340px', justifyContent: 'center', flex: 1, marginLeft:'20px'}}>
                        <h4 style={{color: '#0cabf5', margin: 0}}>Event Details</h4>
                        <div><strong>Where:</strong> Calgary Teen Cafe, 114 3 AVE SW.</div>
                        <div><strong>When:</strong> 1:00PM - 2:00PM every Saturday</div>
                        <div><strong>Start and End Dates:</strong> July 19 - August 30</div>
                        <div><strong>Recommended Age (Anyone wanting to learn Python is welcome!):</strong> 9-13 years old</div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                        <table style={{width: '250px', borderCollapse: 'collapse', background: '#23263a', color: 'white', borderRadius: '12px', overflow: 'hidden', fontSize: '0.98em', margin: '1em 0'}}>
                            <thead>
                                <tr style={{background: '#0cabf5', color: 'white'}}>
                                    <th style={{padding: '0.5em', border: '1px solid #23263a'}}>Class</th>
                                    <th style={{padding: '0.5em', border: '1px solid #23263a'}}>Topic</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td style={{padding: '0.5em', border: '1px solid #23263a'}}>1</td><td style={{padding: '0.5em', border: '1px solid #23263a'}}>IDE Setup, Basic Terms</td></tr>
                                <tr><td style={{padding: '0.5em', border: '1px solid #23263a'}}>2</td><td style={{padding: '0.5em', border: '1px solid #23263a'}}>Variables, Conditionals</td></tr>
                                <tr><td style={{padding: '0.5em', border: '1px solid #23263a'}}>3</td><td style={{padding: '0.5em', border: '1px solid #23263a'}}>Loops</td></tr>
                                <tr><td style={{padding: '0.5em', border: '1px solid #23263a'}}>4</td><td style={{padding: '0.5em', border: '1px solid #23263a'}}>Simple Functions</td></tr>
                                <tr><td style={{padding: '0.5em', border: '1px solid #23263a'}}>5</td><td style={{padding: '0.5em', border: '1px solid #23263a'}}>Libraries</td></tr>
                                <tr><td style={{padding: '0.5em', border: '1px solid #23263a'}}>6</td><td style={{padding: '0.5em', border: '1px solid #23263a'}}>BlackJack Project</td></tr>
                                <tr><td style={{padding: '0.5em', border: '1px solid #23263a'}}>7</td><td style={{padding: '0.5em', border: '1px solid #23263a'}}>Work Time and Peer Review</td></tr>
                                <tr><td style={{padding: '0.5em', border: '1px solid #23263a'}}>8</td><td style={{padding: '0.5em', border: '1px solid #23263a'}}>Q&A, Present Projects, Party!</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', float: 'left', marginLeft: 0, marginRight: 'auto', clear: 'both'}}>
                <iframe src="https://forms.gle/FHysZuz8YJUpxpHT6" className="forms" id="pythonSignup" style={{width: '100%', minWidth: '400px', height: '700px', border: 'none', display: 'block', marginLeft: 0}} title="Python 101 Signup">Loading…</iframe>
            </div>    
        </div>
    )
}
export default event;

