import React from 'react'
import {Carousel} from 'react-bootstrap'
import imagetwo from './assets/consoles.jpg';
import imageone from './assets/gamingtext.jpg';
import imagethree from './assets/pc_lineup.jpg';
import "./index.css"

export default function BootstrapCarousel() {
    let height;
    if (window.innerHeight < 900){
        height = window.innerHeight/2
    } else {
        height = window.innerHeight
    }
    return (
        <div>
            <Carousel className="h-75">
                <Carousel.Item className="h-50">
                    <img
                        className="d-block w-100"
                        src={imageone}
                        height = {window.innerHeight/(1.25)}
                        alt="First slide"
                        style = {{objectFit: "cover"}}
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagetwo}
                        alt="Second slide"
                        height = {window.innerHeight/(1.25)}
                        style = {{objectFit: "cover"}}
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagethree}
                        alt="Third slide"
                        height = {window.innerHeight/(1.25)}
                        style = {{objectFit: "cover"}}
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    )
}
