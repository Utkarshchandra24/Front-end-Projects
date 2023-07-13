
import React from 'react'
import ImageSlider from './ImageSlider'


const Carousel2 = () => {
  const slides = [
    {url: 'C:/Users/Interns/Desktop/Intern Files/React/react-learning/src/Projects/Image Carousel/img1.jpg', title: 'Mountain'},
    {url: 'C:/Users/Interns/Desktop/Intern Files/React/react-learning/src/Projects/Image Carousel/img2.jpg', title: 'Sky'},
    {url: 'C:/Users/Interns/Desktop/Intern Files/React/react-learning/src/Projects/Image Carousel/img3.jpg', title: 'Blue Mountain'},
    {url: 'C:/Users/Interns/Desktop/Intern Files/React/react-learning/src/Projects/Image Carousel/img4.jpg', title: 'Tree'},
    {url: 'C:/Users/Interns/Desktop/Intern Files/React/react-learning/src/Projects/Image Carousel/img5.jpg', title: 'dark Mountain'},
  ] 

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto"
  };

  return (
    <div>
        <h1>Carousel2 file</h1>
        <div style={containerStyles}>
          <ImageSlider slides = {slides} />
        </div>
    </div>
  )
}

export default Carousel2