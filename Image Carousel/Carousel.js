//FreecodeCamp Carousel 
import React from 'react'
import { useState } from 'react'

import img1 from "C:/Users/Interns/Desktop/Intern Files/React/react-learning/src/Projects/Image Carousel/img1.jpg";
//import img2 from "C:/Users/Interns/Desktop/Intern Files/React/react-learning/src/Projects/Image Carousel/img2.jpg";

const images = [
    "C:/Users/Interns/Desktop/Intern Files/React/react-learning/src/Projects/Image Carousel/img2.jpg",
    "C:/Users/Interns/Desktop/Intern Files/React/react-learning/src/Projects/Image Carousel/img3.jpg",
    "C:/Users/Interns/Desktop/Intern Files/React/react-learning/src/Projects/Image Carousel/img4.jpg",
    "C:/Users/Interns/Desktop/Intern Files/React/react-learning/src/Projects/Image Carousel/img5.jpg",
    "C:/Users/Interns/Desktop/Intern Files/React/react-learning/src/Projects/Image Carousel/img6.jpg",
    "C:/Users/Interns/Desktop/Intern Files/React/react-learning/src/Projects/Image Carousel/img7.jpg",
]

const Carousel = () => {

    const[current,setCurrent] = useState(0);

    function nextSlide() {
        setCurrent(current === images.length - 1 ? 0 : current+1);
    }

    function prevSlide() {
        setCurrent(current === 0 ? images.length - 1 : current-1);
    }
    

    return (
        <div>
            <p align="Center"><h1>Project 2: Carousel Image Slider</h1></p>
            <div className='Slider'>
                <div className='left-arrow' onClick={prevSlide}>
                    <button>Previous</button>
                </div>
                <div className='right-arrow' onClick={nextSlide}>
                    <button>Next</button>
                </div>
                {
                  images.map((image,index)=> current == index && (
                    <div key={image} className="slide">
                        <img src={img1} alt="img1" height="500px" width="500px" />      
{/*                         <img scr={img2} alt='img2' height="500px" width="500px" />      */}
                    </div>
                  ))  
                }
            </div>
        </div>
    );
}

export default Carousel