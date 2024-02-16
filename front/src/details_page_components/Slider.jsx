import React from "react";
import Carousel from "./Carousel";
import Img1 from './images/image-product-1.jpg'
import Img2 from './images/image-product-2.jpg'
import Img3 from './images/image-product-3.jpg'
import Img4 from './images/image-product-4.jpg'


const slides = [
    Img1, Img2, Img3, Img4
];

const Slider = () => {
  return (
    // <div className='relative h-72 overflow-hidden'>
    <div className='relative md:w-full md:max-w-[500px]'>
      {/* <img className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2' src="./images/image-product-1.jpg" alt="" /> */}
      <Carousel>
        {
          slides.map( s => (
            <img className='' key={s} src={ s } />
          ))
        }
      </Carousel>
    </div>
  )
}

export default Slider
