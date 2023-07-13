import React from 'react'
import { useState } from 'react'

const ImageSlider = ({slides}) => {

    const [currentIndex,setCurrentUser] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: "relavent"
    }

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundSize: "cover",        
//        backgroundImage: `url(${slides[currentIndex].url})`
        backgroundImage: `url(C:/Users/Interns/Desktop/Intern Files/React/react-learning/src/Projects/Image Carousel)`
    }

    return (
        <div style={sliderStyles}>  
            <h3>Image Slider file </h3>
            <div style={slideStyles}>
            </div>
        </div>
    )
}

export default ImageSlider