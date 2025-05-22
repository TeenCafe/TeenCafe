import React, {useState, useRef} from 'react';
import {Form, Button, Alert} from "react-bootstrap";
import db from '../firebase';
import { getDatabase, ref, set } from "firebase/database";
import "./Reservations.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBeer } from 'react-icons/fa';
import { HiDesktopComputer, HiMusicNote } from 'react-icons/hi';
import { BsFillPeopleFill, BsCupStraw } from 'react-icons/bs';
import { FaMusic, FaCouch } from 'react-icons/fa';
import { IoIosMusicalNotes } from 'react-icons/io';
import { GiChessPawn } from 'react-icons/gi';
import { AiOutlineTrophy } from 'react-icons/ai';



const Reservations = () => {




    return (

        <div className="contain">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdICFmIA5m_fErEDpIFPqDi5GkPsAmC0r-1xcIH5wgzUjtEIw/viewform?embedded=true"
                className = "forms">
            </iframe>
        </div>



    )
}
export default Reservations;

